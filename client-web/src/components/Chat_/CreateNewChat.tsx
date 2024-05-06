import { useState } from "react"
import "./CreateNewChat.scss"
import { Dialog } from "@headlessui/react"
import { sha256 } from "js-sha256"
import { wsClient } from "../../api/wsClient_"
import { AxiosResponse } from "axios"

type Props = {
    sendFile: (formData: FormData) => Promise<AxiosResponse<any, any>>,
}

export const CreateNewChat = (props: Props) => {
    const { sendFile } = props
    const [showNewChatModal, setShowNewChatModal] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [file, setFile] = useState<File | null>(null)

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const onClose = () => {
        setFile(null)
        setShowNewChatModal(false)
    }

    const onCreate = () => {
        if (file) {
            // sendFile, get link for the setRoomIcon
        }
        const randomNumber = Math.round(Math.random() * 100_000)
        const chatNameWithSalt = name + Date.now() + randomNumber
        const roomHash = sha256(chatNameWithSalt)
        const roomJid = `${roomHash}@${import.meta.env.VITE_APP_XMPP_CONFERENCE}`
        wsClient.presence([roomJid])
        wsClient.setOwner(roomJid)
        wsClient.roomConfig(roomJid, {roomName: name, roomDescription: description})
        wsClient.setRoomIcon(roomJid, "")
    }

    return (
        <div className="create-new-chat-btn">
            <button onClick={() => setShowNewChatModal(true)}>New Chat</button>
            <Dialog className="file-dialog" open={showNewChatModal} onClose={() => { }}>
                <Dialog.Panel className="inner">
                    <p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Chat Name" />
                    </p>
                    <p>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Chat Description" />
                    </p>
                    {
                        sendFile && (
                            <p>
                                <label>chat icon</label>
                                <input type="file" accept="image/*" />
                            </p>
                        )
                    }

                    <button disabled={false} onClick={onCreate}>Create</button>
                    <button disabled={false} onClick={onClose}>Cancel</button>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}