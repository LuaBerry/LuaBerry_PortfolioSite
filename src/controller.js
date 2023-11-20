import Chat from "./Chat";
import Post from "./Post";
import makeName from "./randomName";
import path from "path";

export const home = (req, res) => {
    return res.send(path.join(__dirname), '../build/index.html');
}

export const projects = (req, res) => {
    return res.send(path.join(__dirname), '../build/projects.html');
}
export const resume = (req, res) => {
    return res.send(path.join(__dirname), '../build/resume.html');
}
export const resumeKR = (req, res) => {
    return res.render("resumeKR.pug", { pageTitle: "ResumeKR", 
    index: ["About Me", "Education", "Experience", "Skills", "References"],});
}

export const chat = async (req, res) => {
    return res.send(path.join(__dirname), '../build/chats.html');
}
export const postChat = async (req,res) => {
    const {text} = req.body;
    const {name} = req.session;
    await Chat.create({
        name,
        text,
    });
    return res.redirect("/chat");
}

export const jsonChat = async (req, res) => {
    const chats = await Chat.find({});
    return res.json(chats)
}

export const removeChat = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    await Chat.findByIdAndDelete(id)
    return res.redirect("/chat");
}

export const blog = async (req, res) => {
    return res.redirect("https://luaberry.tistory.com/");
}

export const getLogin = (req, res) => {
    return res.render("login.pug", { pageTitle: "Login", });
}

export const postLogin = (req, res) => {
    const {code} = req.body;
    if(code === process.env.CODE) {
        req.session.loggedIn = true;
        console.log("Hello!");
    }
    return res.redirect("/blog");
}