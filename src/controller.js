import path from "path";
import Chat from "./Chat";
import makeName from "./randomName";

export const home = (req, res) => {
    return res.send(path.join(__dirname), '../build/index.html');
}

export const postChat = async (req,res) => {
    const {text, name} = req.body;
    console.log(req.body)
    if(!text || !name) {
        console.log(text, name);
        console.error("ERROR!");
    }
    else {
        await Chat.create({
            name,
            text,
        });
    }

    return res.redirect("/");
}

export const jsonChat = async (req, res) => {
    const chats = await Chat.find({});
    return res.json(chats)
}

export const removeChat = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    await Chat.findByIdAndDelete(id)
    return res.redirect("../../chat");
}

export const blog = async (req, res) => {
    return res.redirect("https://luaberry.tistory.com/");
}

export const postLogin = (req, res) => {
    const {code} = req.body;
    if(code === process.env.CODE) {
        req.session.loggedIn = true;
        console.log("Hello!");
    }
    return res.redirect("/blog");
}