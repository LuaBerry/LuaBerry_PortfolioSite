import express from "express";
import morgan from "morgan";
import router from "./router";
import session from "express-session";
import { localsMiddleware } from "./middleware";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(localsMiddleware);

app.use("/", router);
app.use("/assets", express.static("assets"));

export default app;