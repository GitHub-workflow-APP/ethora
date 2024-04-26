import { ConversationItem } from "./ConversationItem";
import { useChatStore } from "../../store_";

export function ConversationsList() {
    const rooms = useChatStore((state) => state.rooms)
    const setCurrentRoom = useChatStore((state) => state.setCurrentRoom)
    const currentRoom = useChatStore((state) => state.currentRoom)

    const onConversationClick = (room) => {
        setCurrentRoom(room)
    }

    return (
        <div>
            {
                Object.keys(rooms).map((jid) => {
                    const room = rooms[jid]
                    return (
                        <ConversationItem key={room.jid} onClick={() => onConversationClick(room)} active={currentRoom.jid === room.jid} room={room} />
                    )
                })
            }
        </div>
    )
}
