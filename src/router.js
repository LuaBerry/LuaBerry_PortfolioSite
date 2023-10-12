import express from "express";
import { blog, deletePost, getLogin, getUpdatePost, getWritePost, home, portfolio, postLogin, postUpdatePost, postWritePost, projects, resume, viewPost, writeBlog } from "./controller";
import { privatePageMiddleware } from "./middleware";


const router = express.Router();

router.get("/", home);
router.get("/resume", resume);
router.get("/projects", projects);

router.get("/blog", blog);
/*
router.route("/blog/write").all(privatePageMiddleware).get(getWritePost).post(postWritePost);
router.get("/blog/:id", viewPost);
router.get("/blog/:id/delete", privatePageMiddleware,deletePost);
router.route("/blog/:id/update").all(privatePageMiddleware).get(getUpdatePost).post(postUpdatePost);
router.route("/login").get(getLogin).post(postLogin);
*/

//router.get("/portfolio", portfolio);

export default router;