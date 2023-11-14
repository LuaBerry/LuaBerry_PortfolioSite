import express from "express";
import { blog, chat, home, jsonChat, postChat, projects, removeChat, resume, } from "./controller";


const router = express.Router();

router.get("/", home);
router.get("/resume", resume);
router.get("/projects", projects);
router.get("/chat", chat).post("/chat",postChat);
router.get("/chat/:id/remove", removeChat)
router.get("/chat/json", jsonChat);
router.get("/blog", blog);

export default router;