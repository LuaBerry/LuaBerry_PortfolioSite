export const privatePageMiddleware = (req, res, next) => {
    if(req.session.loggedIn) {
        return next();
    }
    return res.redirect("/blog");
}

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    next();
}