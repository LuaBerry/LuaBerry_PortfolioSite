import axios from "axios";
import React from "react";

const ChatComponent = ({chat, setChats, onRemove})=> {
    const time = new Date(chat.sentAt);
    return (
        <div className="chatBox">
            <small className="time">{time.toTimeString("hh:mm").split(' ')[0]}</small>
            <div className="chat">
                <span className="text">{chat.name + ": " + chat.text}</span>
                {window.sessionStorage.getItem("name") == chat.name &&
                chat._id &&
                (
                    <form method="POST" onSubmit={async (event) => {
                        event.preventDefault();
                        onRemove(chat._id)
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