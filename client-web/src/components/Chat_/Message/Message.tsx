import cn from 'classnames'
import profileImg from '../../../assets/images/profilepic.png'

import "./Message.scss"
import { MoreIcon } from '../Icons/MoreIcon'
import { MessageType } from '../../../store_/chat'
import { useChatStore } from '../../../store_'
import { DateTime } from 'luxon'

type Props = {
    message: MessageType,
    isGroup: boolean,
    threadMessages: MessageType[] | null
    showActions?: boolean
}

export function Message(props: Props) {
    const { message, isGroup, threadMessages, showActions = 'true' } = props
    const setCurrentThreadMessage = useChatStore(state => state.setCurrentThreadMessage)

    const onThreadInfClick = () => {
        setCurrentThreadMessage(message)
    }

    let threadInfContent;

    if (threadMessages) {
        const repliesCount = threadMessages.length
        let text = repliesCount === 1 ? `${repliesCount} Reply` : `${repliesCount} Replies`

        threadInfContent = (
            <div className='thread-inf-content' onClick={onThreadInfClick}>
                <div>
                    <span>{text}</span>
                </div>

            </div>
        )
    } else {
        threadInfContent = null
    }

    let content;

    if (message.isSystemMessage === "true") {
        content = (
            <div data-id={message.id} className={cn("chat-message-row", "system")}>
                <span>{message.text}</span>
            </div>
        )
    } else {
        let messagePayload;

        if (message.isMediafile === "true" && !message.locationPreview) {
            content = null
        }

        if (message.isMediafile === "true" && message.locationPreview) {
            messagePayload = <img className="message-image" src={message.locationPreview}></img>
        } else {
            messagePayload = message.text
        }

        content = (
            <div data-id={message.id} className={cn("chat-message-row", { "me": message.isMe })}>
                <div className="message">
                    <div className="avatar-wrapper">
                        {!isGroup && <img className="avatar" src={profileImg} />}
                    </div>
                    <div className="contentWrapper">
                        <div className="content">
                            <div className="header">
                                {!isGroup && (
                                    <strong>
                                        {`${message.senderFirstName} ${message.senderLastName}`}
                                    </strong>
                                )}
                                { showActions && (
                                    <button className="menu-btn">
                                        <MoreIcon />
                                    </button>
                                ) }
                            </div>
                            <div>
                                {messagePayload}
                            </div>
                            <div className='message-date'>{DateTime.fromMillis(Number(message.created)).toFormat('dd.LL hh:mm a') }</div>
                        </div>
                        {
                            threadInfContent
                        }

                    </div>
                </div>
            </div>
        )
    }

    return (
        content
    )
}