import express from "express";
import { blog, getWriteBlog, home, portfolio, postWriteBlog, projects, resume, viewBlog, writeBlog } from "./controller";

const router = express.Router();

router.get("/", home);
router.get("/resume", resume);
router.get("/projects", projects);

router.get("/blog", blog);
router.route("/blog/write").get(getWriteBlog).post(postWriteBlog);
router.get("/blog/:id", viewBlog);

//router.get("/portfolio", portfolio);

export default router;