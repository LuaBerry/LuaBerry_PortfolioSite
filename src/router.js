import express from "express";
import { blog, home, jsonChat, postChat, removeChat } from "./controller";


const router = express.Router();

router.get("/", home);
router.post("/chat", postChat);
router.get("/chat/:id/remove", removeChat)
router.get("/chat/json", jsonChat);
router.get("/blog", blog);

export default router;