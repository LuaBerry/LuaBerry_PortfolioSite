import Post from "./Post";
import Chat from "./Chat";

export const home = (req, res) => {
    return res.render("home.pug", { pageTitle: "Home", });
};

export const projects = (req, res) => {
    return res.render("projects.pug", { pageTitle: "Projects", 
    index: []});
};
export const resume = (req, res) => {
    return res.render("resume.pug", { pageTitle: "Resume", 
    index: ["About Me", "Education", "Experience", "Skills", "References"],});
};

export const chat = async (req, res) => {
    const chats = await Chat.find({});
    return res.render("chat.pug", { pageTitle: "Chat", chats});
}
export const postChat = async (req,res) => {
    const {text} = req.body;
    await Chat.create({
        text,
    });
    return res.redirect("/chat");
}

export const blog = async (req, res) => {
    /*
    const posts = await Post.find({});
    return res.render("blog.pug", { pageTitle: "Blog", 
    index: ["Personal Identification", "Education", "Experience", "Skills", "References"],
    posts,});
    */
    return res.redirect("https://luaberry.tistory.com/");
}

export const getWritePost = (req, res) => {
    return res.render("writeblog.pug", { pageTitle: "Blog", });
}

export const postWritePost = async (req, res) => {
    const {title, body} = req.body;
    const hashtags = req.body.hashtags ? req.body.hashtags.split("#").slice(1) : [];
    await Post.create({
        title,
        body,
        hashtags,
    });
    return res.redirect("/blog");
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await Post.findByIdAndRemove(id);
    }
    catch(err) {
        return res.redirect("/blog");
    }
    return res.redirect("/blog");
}

export const getUpdatePost = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id);
    return res.render("updateblog.pug", { pageTitle: "Update", post})
}

export const postUpdatePost = async (req, res) => {
    const {title, body} = req.body;
    const {id} = req.params;
    const hashtags = req.body.hashtags ? req.body.hashtags.split("#").slice(1) : [];
    await Post.findByIdAndUpdate(id, {
        title,
        body,
        hashtags,
    });
    return res.redirect("/blog");
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