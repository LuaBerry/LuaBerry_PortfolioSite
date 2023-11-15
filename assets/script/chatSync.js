refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", getCurrentChat);

chatLists = document.querySelector(".chatLists");

function getCurrentChat() {
    var xhttp = new XMLHttpRequest();
    //GET request: json data from chat DB
    xhttp.open("GET", "/chat/json", true);
    xhttp.send();
    xhttp.responseType = 'json';
    xhttp.onreadystatechange = () => {
        //When GET request is complete and status is 200.
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("Fetch complete!");
            var res = xhttp.response;
            console.log(res);
            
            appendNewChats(res);
            
            //For test
            res.forEach(element => {
                console.log(element);
                appendChat(element);
            });
        }
    }
}

function appendNewChats(chats) {
    //call appendNewChat for each element in array.
    //to-do: Check all chat list, and find new chat.
    //to-do: 
}


chatLists = document.querySelector(".chatLists");

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
    
    chatLists.insertAdjacentElement( 'beforeend', divChatBox);
}