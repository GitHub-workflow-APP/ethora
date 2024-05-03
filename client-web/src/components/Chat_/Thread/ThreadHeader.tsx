import { RoomType } from "../../../store_/chat"
import { MdClose } from "react-icons/md";

import { useChatStore } from "../../../store_";

type Props = {
    currentRoom: RoomType
}

export const ThreadHeader = ({ currentRoom }: Props) => {
    const setCurrentThreadMessage = useChatStore(state => state.setCurrentThreadMessage)
    return (
        <div className="thread-header">
            <div className="content">
                <div>
                    <div className="title">
                        Thread
                    </div>
                    <div>
                        {currentRoom.title}
                    </div>
                </div>
                <button onClick={() => setCurrentThreadMessage(null)}>
                    <MdClose size={'25px'} />
                </button>

            </div>
        </div>
    )
}