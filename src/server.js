import express from "express";
import morgan from "morgan";
import router from "./router";
import session from "express-session";
import MongoStore from "connect-mongo";
import { cacheMiddleware, localsMiddleware } from "./middleware";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
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

app.use("/", router);
app.use("/assets", cacheMiddleware, express.static("assets"));

export default app;