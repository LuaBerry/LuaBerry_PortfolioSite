refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", getCurrentChat);
setInterval(getCurrentChat, 2000);
chatLists = document.querySelector(".chatLists");
var length = chatLists.dataset.len;
var user = chatLists.dataset.user;
chatLists.scrollTo(0, chatLists.scrollHeight);
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
            chatLists.innerHTML = "";
            temp = res.length;
            //res = res.slice(length);
            length = temp;
            
            //appendNewChats(res);
            
            //For test
            res.forEach(element => {
                appendChat(element);
            });
            chatLists.scrollTo(0, chatLists.scrollHeight);
        }
    }
}



function appendNewChats(chats) {
    //call appendNewChat for each element in array.
    //to-do: Check all chat list, and find new chat.
    var newChats;
    newChats.forEach(e => {
        appendChat(e);
    });
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
    if (user == chat.name) {
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

