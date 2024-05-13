import { ModelChatMessage, ModelMeUser } from "./models";
import { useChatStore } from "./store/useChatStore";
import getChat from "./utils/getChat";
import getMessage from "./utils/getMessage";
import { wsConnect } from "./ws";
const getState = useChatStore.getState
const log = console.log

export function bootstrapChatWithUser(user: ModelMeUser) {
    getState().doBootstraped(user)
    actionConnect()
}

export function actionConnect() {
    return wsConnect()
}

export function actionShow() {
    const store = getState()

    if (!store.inited) {
        actionResync()
    }

    store.doShow()

    if (store.chatId) {
        actionMarkChatAsRead(store.chatId)
    }
}

export function actionResync() {
    console.log('actionResync')
    const store = getState()

    if (store.resyncing) {
        return store.resyncing
    }
}

export function actionMarkChatAsRead(chatId: string, force = false) {
    const store = getState()

    if (!force) {
        const chat = getChat(store.chatList, chatId)

        if (!chat.hasUnread) {
            return Promise.resolve()
        }
    }

    actionChatMarkedAsRead(chatId)

    // TODO request to store chatRead timestamp
}

let queueMessageId = 0;

export function actionPostMessage(chatId: string, text: string) {
    const store = getState()
    const chat = getChat(store.chatList, chatId)

    const queueMessage: ModelChatMessage = {
        id: `queue-${ queueMessageId++ }`,
        text,
        from: {
            chatId: chatId,
            nickname: store.me.xmppUsername
        },
        created: Date.now().toString(),
        dataAttrs: {
            xmlns: '',
            senderJID: '',
            senderFirstName: store.me.firstName,
            senderLastName: store.me.lastName,
            senderWalletAddress: store.me.walletAddress,
            isSystemMessage: "false",
            tokenAmount: '',
            mucname: '',
            roomJid: '',
            isReply: "false",
            showInChannel: "true",
            push: "true",
        },
        isMe: true,
        status: 'queued'
    }

    return actionQueueMessage(queueMessage)
}

export function actionQueueMessage(queueMessage: ModelChatMessage) {
    getState().doQueueMessage(queueMessage)
    actionPostMessageFromQueue(queueMessage.from.chatId)
}

export function actionPostMessageFromQueue(chatId: string) {
    const state = getState()

    const chat = getChat(state.chatList, chatId)

    if (!chat.sending) {
        const queueMessage = chat.messages.find(item => item.status === 'queued')

        if (queueMessage) {
            chat.sending = true

            return sendPostQueueMessage(queueMessage)
                .then((message: ModelChatMessage) => {
                    state.doDequeueSuccessfulMessage(queueMessage, message)
                })
                .catch(() => {
                    state.doDequeueFailedMessage(queueMessage)

                    return actionPostMessageFromQueue(chatId)
                })
        }
    }

    return Promise.resolve();

    function sendPostQueueMessage(queueMessage: ModelChatMessage) {
        const chatId = queueMessage.from.chatId
        const state = getState()

        // TODO xmpp awaitSend
        return Promise.resolve(queueMessage)
    }
}

export function actionChatMarkedAsRead(chatId: string) {
    const state = getState()
    state.doChatMarkedAsRead(chatId)
}

export function actionReceivedNewMessage(message: ModelChatMessage) {
    const state = getState()

    state.doReceivedNewMessage(message)

    const chatId = message.from.chatId;
    const chat = getChat(state.chatList, chatId)

    if (!chat) {
        // TODO resync
        log('unknown chat in websocket message, resyncing...')
    }

    if (message.from.nickname === state.me.xmppUsername) {
        return
    }

    actionNotifyAboutNewMessage(chatId, message.id)
}

export function actionNotifyAboutNewMessage(chatId: string, messageId: string) {
    if ((typeof Notification === 'undefined') || (Notification as any).permission !== 'granted') {
        return
    }

    window.setTimeout(function () {
        const store = getState()

        const chat = getChat(store.chatList, chatId)
        if (chat) {
            return
        }

        if (chat.muted) {
            return
        }

        if (!chat.hasUnread) {
            return
        }

        const message = getMessage(chat.messages, messageId)
        if (!message) {
            return
        }

        // TODO
        const title = 'Title'
        const options = {
            // TODO getMessageText
            body: message.text,
            tag: `chat-new-mesage-${ message.id }`,
            // TODO getChatImage
            icon: chat.thumbnail
        }

        const notification = new Notification(title, options)

        notification.onclick = function() {
            window.focus();
            // TODO actionOpenChat
        };
    }, 100)
}
