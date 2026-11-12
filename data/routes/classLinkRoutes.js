import express from "express";

import {
  getClassLink,
  createClassLink
} from "../controllers/classLinkController.js";

const router = express.Router();

// GET class link information
router.get("/", getClassLink);

// POST new class link information
router.post("/", createClassLink);

export default router;
