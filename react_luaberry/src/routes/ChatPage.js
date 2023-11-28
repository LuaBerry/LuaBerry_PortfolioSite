import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ChatComponent from "../components/ChatComponent";
import PostChat from "../components/PostChat";
import '../css/chatStyle.css';
import makeName from "../randomName";

const ChatPage = () => {
    const [chats, setChats] = useState([]);
    const chatListRef = useRef(null);
    const prevChatRef = useRef([]);

    if(!window.sessionStorage.getItem("name"))
        window.sessionStorage.setItem("name", makeName());

    useEffect(() => {
        const getChat = async ()=> {
            const {data} = await axios.get("/chat/json");
            console.log(prevChatRef.current, data);
            if((prevChatRef.current.toString()) !== (data.toString())) {
                console.log("!==");
                setChats(data);
                prevChatRef.current = data;
            }
        };
        getChat();
        const getChatInterval = setInterval(getChat, 4000);
        return () => clearInterval(getChatInterval);
    }, [])

    useEffect(() => {
        chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        
    }, [chats])

    const handleRemove = (chatId) => {
        setChats((prevChat) => prevChat.filter((chat) => chat._id != chatId));
    }

    return (
        <section id='chat'>
            <div ref={chatListRef} className="chatLists">
            {
                chats.map(
                (chat) => {
                return (<ChatComponent key={chat._id} chat={chat} setChats={setChats} onRemove={handleRemove}/>);
                })
            }
            </div>
            <PostChat chats={chats} setChats={setChats}/>
        </section>
    )
}

export default ChatPage;