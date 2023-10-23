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

export const cacheMiddleware = (req, res, next) => {
    const cacheDuration = 60 * 60 * 24 * 7

    if (req.method == 'GET') {
        res.set('Cache-control', `public, max-age=${cacheDuration}`)
    } else {
        res.set(`Cache-control`, `no-store`)
    }

    next()
}