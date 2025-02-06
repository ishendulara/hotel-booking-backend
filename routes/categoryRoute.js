// routes/categoryRoute.js
import express from "express";
import { postCategory, deleteCategory, getCategory, getCategoryByName, updateCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", postCategory)

categoryRouter.delete("/:name",deleteCategory)

categoryRouter.get("/",getCategory)

categoryRouter.get("/:name",getCategoryByName)

categoryRouter.update("/:name",updateCategory)

export default categoryRouter;//fix
