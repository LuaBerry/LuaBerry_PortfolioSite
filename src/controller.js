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

export const blog = (req, res) => {
    return res.render("blog.pug", { pageTitle: "Blog", 
    index: ["Personal Identification", "Education", "Experience", "Skills", "References"],});
}

export const getWriteBlog = (req, res) => {
    return res.render("writeblog.pug", { pageTitle: "Blog", });
}

export const postWriteBlog = (req, res) => {
    return res.redirect("/blog");
}

export const viewBlog = (req, res) => {
    const {id} = req.params;
    return res.render("blog.pug", { pageTitle: "Blog", });
}