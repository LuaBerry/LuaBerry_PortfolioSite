export const home = (req, res) => {
    return res.render("home.pug", { pageTitle: "Home", });
};

export const portfolio = (req, res) => {
    return res.render("portfolio.pug", { pageTitle: "portfolio", });
};

export const projects = (req, res) => {
    return res.render("projects.pug", { pageTitle: "projects", });
};

export const resume = (req, res) => {
    return res.render("resume.pug", { pageTitle: "resume", });
};