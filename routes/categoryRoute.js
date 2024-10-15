// routes/categoryRoute.js
import express from "express";
import { postCategory, getCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", postCategory);
categoryRouter.get("/", getCategory);

export default categoryRouter;//fix
