import express from "express";
import { home, portfolio, projects, resume } from "./controller";

const router = express.Router();

router.get("/", home);
router.get("/resume", resume);
router.get("/projects", projects);
router.get("/portfolio", portfolio);

export default router;