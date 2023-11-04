import express from "express";
import { blog, chat, home, postChat, projects, resume, } from "./controller";
import { privatePageMiddleware } from "./middleware";


const router = express.Router();

router.get("/", home);
router.get("/resume", resume);
router.get("/projects", projects);
router.get("/chat", chat);
router.post("/chat",postChat);
router.get("/blog", blog);

export default router;