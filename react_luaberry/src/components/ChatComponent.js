import React from "react";

const ChatComponent = ({chat})=> {
    const time = new Date(chat.sentAt);
    return (
        <div className="chatBox">
            <small className="time">{time.toTimeString("hh:mm").split(' ')[0]}</small>
            <div className="chat">
                <span className="text">{chat.name + ": " + chat.text}</span>
                {window.sessionStorage.getItem("name") == chat.name && (
                    <form action={`/chat/${chat._id}/remove`} method="GET" >
                        <input type="submit" value="X"/>
                    </form>
                )
                }
            </div>
        </div>)
}

export default ChatComponent;