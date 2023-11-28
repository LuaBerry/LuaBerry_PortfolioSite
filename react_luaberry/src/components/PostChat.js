import axios from 'axios';
import qs from 'qs';
import React from "react";

const postChat = ({chats, setChats}) => {
    return (
        <form className="inputBox" method="POST"
            onSubmit={async (event) => {
            event.preventDefault();
            const text = event.target.text.value;
            event.target.text.value = "";
            setChats(chats=>[...chats, {
                text: text,
                name: window.sessionStorage.getItem("name"),
                sentAt: (new Date()).toString(),
            }])
            await postNewChat(text);
            const { data } = await axios.get("/chat/json");
            setChats(data);
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