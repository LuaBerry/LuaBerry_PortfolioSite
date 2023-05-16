import Post from "./Post";

export const home = (req, res) => {
    return res.render("home.pug", { pageTitle: "Home", });
};

export const portfolio = (req, res) => {
    return res.render("portfolio.pug", { pageTitle: "Portfolio", 
    index: []});
};

export const projects = (req, res) => {
    return res.render("projects.pug", { pageTitle: "Projects", 
    index: []});
};
export const resume = (req, res) => {
    return res.render("resume.pug", { pageTitle: "Resume", 
    index: ["Personal Identification", "Education", "Experience", "Skills", "References"],});
};

export const blog = async (req, res) => {
    const posts = await Post.find({});
    return res.render("blog.pug", { pageTitle: "Blog", 
    index: ["Personal Identification", "Education", "Experience", "Skills", "References"],
    posts,});
}

export const getWriteBlog = (req, res) => {
    return res.render("writeblog.pug", { pageTitle: "Blog", });
}

export const postWriteBlog = async (req, res) => {
    const {title, body} = req.body;
    const hashtags = req.body.hashtags ? req.body.hashtags.split("#").slice(1) : [];
    await Post.create({
        title,
        body,
        hashtags,
    });
    return res.redirect("/blog");
}

export const viewBlog = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id);
    return res.render("viewblog.pug", { pageTitle: "Blog", post});
}