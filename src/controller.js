import Chat from "./Chat";
import Post from "./Post";
import makeName from "./randomName";

export const home = (req, res) => {
    return res.render("home.pug", { pageTitle: "Home", });
}

export const projects = (req, res) => {
    return res.render("projects.pug", { pageTitle: "Projects", 
    index: []});
}
export const resume = (req, res) => {
    return res.render("resume.pug", { pageTitle: "Resume", 
    index: ["About Me", "Education", "Experience", "Skills", "References"],});
}
export const resumeKR = (req, res) => {
    return res.render("resumeKR.pug", { pageTitle: "ResumeKR", 
    index: ["About Me", "Education", "Experience", "Skills", "References"],});
}

export const chat = async (req, res) => {
    if(!req.session.name)
        req.session.name = makeName();
    const chats = await Chat.find({});
    return res.render("chat.pug", { pageTitle: "Chat", chats, session: req.session});
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

export const viewPost = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id);
    return res.render("viewblog.pug", { pageTitle: "Blog", post});
}