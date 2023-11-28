import axios from "axios";
import React, { useRef } from "react";

const ChatComponent = ({chat, setChats})=> {
    const time = new Date(chat.sentAt);
    const thisChat = useRef(null);
    return (
        <div ref={thisChat} data-id={chat._id} className="chatBox">
            <small className="time">{time.toTimeString("hh:mm").split(' ')[0]}</small>
            <div className="chat">
                <span className="text">{chat.name + ": " + chat.text}</span>
                {window.sessionStorage.getItem("name") == chat.name &&
                chat._id &&
                (
                    <form method="POST" onSubmit={async (event) => {
                        event.preventDefault();
                        if(thisChat.current.dataset.id == chat._id)
                            thisChat.current.style.display = "none";
                        await axios.get(`/chat/${chat._id}/remove`);
                        const { data } = await axios.get("/chat/json");
                        setChats(data);
                    }} >
                        <input type="submit" value="X"/>
                    </form>
                )
                }
            </div>
        </div>)
}

export default ChatComponent;