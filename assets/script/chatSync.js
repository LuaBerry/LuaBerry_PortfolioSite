refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", getCurrentChat);

var chatSync = setInterval(getCurrentChat, 6000);

chatLists = document.querySelector(".chatLists");
var length = parseInt(chatLists.dataset.len);
var username = chatLists.dataset.user;
chatLists.scrollTop = chatLists.scrollHeight;

function getCurrentChat() {
    var xhttp = new XMLHttpRequest();

    //GET request: json data from chat DB
    xhttp.open("GET", "/chat/json", true);
    
    xhttp.send();
    xhttp.responseType = 'json';
    xhttp.onreadystatechange = () => {
        //When GET request is complete and status is 200.
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var res = xhttp.response;
            if(res.length !== length)
            {
                length = res.length;
                console.log("200!");
                chatLists.innerHTML = "";
                res.forEach(element => {
                    appendChat(element);
                });
                chatLists.scrollTop = chatLists.scrollHeight;
            }
            console.log("304!");
        }
    }
}

formInputBox = document.querySelector(".inputBox");
formInputBox.addEventListener("submit", (event) => {
    event.preventDefault();
    clearInterval(chatSync);
    inputText = formInputBox.querySelector("#text");
    text = inputText.value;
    postNewChat(text);
    inputText.value = '';
})



function postNewChat(text) {
    console.log(text);
    var xhttp = new XMLHttpRequest();
    //GET request: json data from chat DB
    xhttp.open("POST", "/chat", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`text=${text}`);
    chat = {
        name: username,
        sentAt: new Date(),
        text: text,
    }
    appendChat(chat);
    
    length += 1;
    chatLists.scrollTop = chatLists.scrollHeight;
    xhttp.onreadystatechange = () => {
        //When GET request is complete and status is 200.
        if (xhttp.readyState == 4) {
            if(xhttp.status == 200){
                console.log("Post complete!");
                chatSync = setInterval(getCurrentChat, 6000);
            }
            else {
                console.log("Post fail!");
            }
        }
    }
}



function appendChat(chat) {
    divChatBox = document.createElement("div");
    divChatBox.classList.add("chatBox");

    smallTime = document.createElement("small");
    smallTime.classList.add("time");
    time = new Date(chat.sentAt);
    smallTime.innerText = time.toTimeString("hh:mm").split(' ')[0];
    divChatBox.appendChild(smallTime);

    divChat = document.createElement("div");
    divChat.classList.add("chat");
    divChatBox.appendChild(divChat);

    spanText = document.createElement("span");
    spanText.classList.add("text");
    spanText.innerText = chat.name + ": " + chat.text;
    divChat.appendChild(spanText);
    if (username == chat.name) {
        formRemove = document.createElement("form");
        formRemove.setAttribute("action", `/chat/${chat._id}/remove`);
        formRemove.setAttribute("method", "get");

        inputSubmit = document.createElement("input");
        inputSubmit.setAttribute("type", "submit");
        inputSubmit.setAttribute("value", "X");

        formRemove.appendChild(inputSubmit);
        divChat.appendChild(formRemove);
    }
    chatLists.insertAdjacentElement('beforeend', divChatBox);
}

