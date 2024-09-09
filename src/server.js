import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";
import morgan from "morgan";
import path from "path";
import Project from "./Project";
import { cacheMiddleware, localsMiddleware } from "./middleware";
import Link from "./Link";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    cookie: { maxAge: 1000 * 60 * 30 },
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_LINK})
}))
app.use(localsMiddleware);

app.use(express.static(path.join(__dirname, '../build')));

app.get("/projects/json", async (req, res) => {
    const projects = await Project.find({}).sort([['time', -1]]);
    return res.json(projects);
})
app.use("/assets", cacheMiddleware, express.static("assets"));
app.get("/links/json", async (req, res) => {
    const links = await Link.find({});
    return res.json(links);
})
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});


export default app;