import { StateCreator } from "zustand";
import { ModelState, ModelMeUser, ModelChatMessage, ModelChat } from "../models";
import getChat from "../utils/getChat";
import { setChat } from "../utils/setChat";

const log = console.log

type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never], never],
  [],
  T
>;

export interface ChatSliceInterface extends ModelState {
  doBootstraped: (user: ModelMeUser) => void;
  doConnect: () => void;
  doDisconnected: () => void;
  doConnected: () => void;
  doShow: () => void;
  doChatMarkedAsRead: (chatId: string) => void;
  doReceivedNewMessage: (message: ModelChatMessage) => void;
  doQueueMessage: (queueMessage: ModelChatMessage) => void;
  doDequeueSuccessfulMessage: (queueMessage: ModelChatMessage, message: ModelChatMessage) => void;
  doDequeueFailedMessage: (queueMessage: ModelChatMessage) => void;
  doResynced: (chatList: Array<ModelChat>) => void;
}

export const createChatSlice: ImmerStateCreator<
  ChatSliceInterface
> = (set, get) => ({
  inited: false,
  connection: 'disconnected',
  resyncing: null,
  visible: false,
  focused: false,
  chatId: null,
  chatList: null,
  me: null,
  doBootstraped: (user: ModelMeUser) => set((s) => {s.me = user}),
  doConnect: () => set(s => {s.connection = 'connecting'}),
  doDisconnected: () => set(s => {s.connection = 'disconnected'}),
  doConnected: () => set(s => {s.connection = 'connected'}),
  doShow: () => set((s) => {s.visible = true}),
  doChatMarkedAsRead: (chatId: string, ) => {
    const state = get()
    const chatList = state.chatList
    const oldChat = getChat(chatList, chatId)
    const newChat: ModelChat = {
      ...oldChat,
      hasUnread: false
    }

    set((s) => s.chatList = setChat(chatList, newChat))
  },
  doReceivedNewMessage: (message: ModelChatMessage) => {
    const state = get()
    const chatId = message.from.chatId
    const oldChat = getChat(state.chatList, chatId)

    if (oldChat) {
      let hasUnread;

      const isMyMessage = (message.from.nickname === state.me.xmppUsername)
      if (isMyMessage) {
        hasUnread = oldChat.hasUnread
      } else {
        hasUnread = !(chatId === state.chatId)
      }

      const newChat = {
        ...oldChat,
        hasUnread: hasUnread,
        messages: oldChat.messages.concat([message])
      }

      set((s) => s.chatList = setChat(state.chatList, newChat))
    }
  },
  doQueueMessage: (quequeMessage: ModelChatMessage) => {
    const state = get()
    const chatId = quequeMessage.from.chatId
    const oldChat = getChat(state.chatList, chatId)
    const oldMessages = oldChat.messages

    const newMessages = oldMessages.concat(quequeMessage)
    const newChat: ModelChat = {
      ...oldChat,
      messages: newMessages
    }

    set(s => s.chatList = setChat(s.chatList, newChat))
  },
  doDequeueSuccessfulMessage: (queueMessage: ModelChatMessage, message: ModelChatMessage) => {
    const state = get()
    const chatId = queueMessage.from.chatId
    const oldChat = getChat(state.chatList, chatId)
    const oldMessages = oldChat.messages
    const index = oldMessages.indexOf(queueMessage)
    const newMessages = oldMessages.concat([])

    newMessages[index] = message
    const newChat: ModelChat = {
      ...oldChat,
      messages: newMessages,
      sending: false
    }

    set(s => s.chatList = setChat(s.chatList, newChat))
  },
  doDequeueFailedMessage: (queueMessage: ModelChatMessage) => {
    const state = get()
    const chatId = queueMessage.from.chatId
    const oldChat = getChat(state.chatList, chatId)
    const oldMessages = oldChat.messages

    const index = oldMessages.indexOf(queueMessage)
    const newMessages = oldMessages.concat([])
    const newMessage: ModelChatMessage = {
      ...queueMessage,
      status: 'failed'
    }
    newMessages[index] = newMessage
    const newChat: ModelChat = {
      ...oldChat,
      messages: newMessages,
      sending: false
    }

    set(s => s.chatList = setChat(s.chatList, newChat))
  },
  doResynced: (chatList: Array<ModelChat>) => {
    log('chat slice: doResynced')
    set((s) => ({...s, inited: true, resyncing: null, chatList: chatList,}))
  }
});
