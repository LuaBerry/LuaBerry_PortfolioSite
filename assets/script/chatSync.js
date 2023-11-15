refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", getCurrentChat);

function getCurrentChat() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/chat/ajax", true);
    xhttp.send();
    xhttp.responseType = 'json';

    xhttp.foreach(value=>{console.log(value)})
    //to-do: make json to array.
    
}

function appendNewChats(chats) {
    //call appendNewChat for each element in array.
}


chatLists = document.querySelector(".chatLists");

function appendChat(chat) {
    divChatBox = document.createElement("div");
    divChatBox.classList.add("chatBox");

    smallTime = document.createElement("small");
    smallTime.classList.add("time");
    smallTime.value = chat.sentAt.toTimeString("hh:mm").split(' ')[0];
    divChatBox.appendChild(smallTime);

    divChat = document.createElement("div");
    divChat.classList.add("chat");
    divChatBox.appendChild(divChat);

    spanText = document.createElement("span");
    spanText.classList.add("text");
    spanText.value = chat.name + ": " + chat.text;
    divChat.appendChild(spanText);
}