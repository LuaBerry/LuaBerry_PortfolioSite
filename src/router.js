import express from "express";
import { blog, deletePost, getUpdatePost, getWritePost, home, portfolio, postUpdatePost, postWritePost, projects, resume, viewPost, writeBlog } from "./controller";

const router = express.Router();

router.get("/", home);
router.get("/resume", resume);
router.get("/projects", projects);

router.get("/blog", blog);
router.route("/blog/write").get(getWritePost).post(postWritePost);
router.get("/blog/:id", viewPost);
router.get("/blog/:id/delete", deletePost);
router.route("/blog/:id/update").get(getUpdatePost).post(postUpdatePost);

//router.get("/portfolio", portfolio);

export default router;