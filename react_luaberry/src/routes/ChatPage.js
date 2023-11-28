import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ChatComponent from "../components/ChatComponent";
import PostChat from "../components/PostChat";
import '../css/chatStyle.css';
import makeName from "../randomName";

const ChatPage = () => {
    const [chats, setChats] = useState([]);
    const chatListRef = useRef(null);
    if(!window.sessionStorage.getItem("name"))
        window.sessionStorage.setItem("name", makeName());
    useEffect(() => {
        const getChat = async ()=> {
            const {data} = await axios.get("/chat/json");
            if((chats.toString()) !== (data.toString())) {
                setChats(data);
            }
        };
        getChat();
        const getChatInterval = setInterval(getChat, 4000);
        return () => clearInterval(getChatInterval);
    }, [])
    useEffect(() => {
        chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }, [chats])
    return (
        <section id='chat'>
            <div ref={chatListRef} className="chatLists">
            {
                chats.map(
                (chat) => {
                return (<ChatComponent chat={chat} setChats={setChats}/>);
                })
            }
            </div>
            <PostChat setChats={setChats}/>
        </section>
    )
}

export default ChatPage;