import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import { cacheMiddleware, localsMiddleware } from "./middleware";
import path from "path";

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

app.use("/assets", cacheMiddleware, express.static("assets"));
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});


export default app;