import React, { useRef, useState, useEffect } from "react";
import axios from "axios"
import '../css/chatStyle.css'
import makeName from "../randomName";
import ChatComponent from "../components/ChatComponent";
import PostChat from "../components/PostChat";

const ChatPage = () => {
    const [chats, setChats] = useState([]);
    const chatListRef = useRef(null);
    var prevChat = [];
    if(!window.sessionStorage.getItem("name"))
        window.sessionStorage.setItem("name", makeName());
    useEffect(() => {
        const getChat = async ()=> {
            const {data} = await axios.get("/chat/json");
            if((prevChat.toString()) != (data.toString())) {
                setChats(data);
                prevChat = data;
                console.log(prevChat, data);
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
                return (<ChatComponent chat={chat} />);
                })
            }
            </div>
            <PostChat chats={chats} setChats={setChats}/>
        </section>
    )
}

export default ChatPage;