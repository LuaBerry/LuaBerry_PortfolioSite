import React from "react";
import qs from 'qs';
import axios from 'axios';

const postChat = ({chats, setChats}) => {
    return (
        <form action="/chat" className="inputBox" method="POST" 
            onSubmit={async (event) => {
            event.preventDefault();
            await postNewChat(event.target.text.value);
            const { data } = await axios.get("/chat/json");
            console.log(data);
            setChats(data);
            event.target.text.value = "";
        }}
        >
            <input id="refresh" type="button" value={"\u27f3"}/>
            <input id="text" name="text"
            placeholder={window.sessionStorage.getItem("name")} required autoFocus />
            <input type="submit" value="Send" />
        </form>
    )
}

const postNewChat = async (text) => {

    if(text && window.sessionStorage.getItem("name")) {
        const data = qs.stringify({
            text,
            name: window.sessionStorage.getItem("name")
        });
        await axios.post("/chat", data,{
            headers: { "Content-type": "application/x-www-form-urlencoded"}, 
            withCredentials: true });
    }
}

export default postChat;