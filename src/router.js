import express from "express";
import { blog, deletePost, getLogin, getUpdatePost, getWritePost, home, portfolio, postLogin, postUpdatePost, postWritePost, projects, resume, viewPost, writeBlog } from "./controller";
import { privatePageMiddleware } from "./middleware";


const router = express.Router();

router.get("/", home);
router.get("/resume", resume);
router.get("/projects", projects);

router.get("/blog", blog);

export default router;