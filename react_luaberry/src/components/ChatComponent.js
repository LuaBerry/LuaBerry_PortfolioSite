import axios from "axios";
import React, { useRef } from "react";

const ChatComponent = ({chat, setChats})=> {
    const time = new Date(chat.sentAt);
    const deleteButton = useRef(null);
    return (
        <div className="chatBox">
            <small className="time">{time.toTimeString("hh:mm").split(' ')[0]}</small>
            <div className="chat">
                <span className="text">{chat.name + ": " + chat.text}</span>
                {window.sessionStorage.getItem("name") == chat.name && (
                    <form ref={deleteButton} data-id={chat._id} method="POST" onSubmit={async (event) => {
                        event.preventDefault();
                        await axios.get(`/chat/${chat._id}/remove`);
                        if(deleteButton.current.dataset._id == chat._id)
                            deleteButton.current.style.display = "none";
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