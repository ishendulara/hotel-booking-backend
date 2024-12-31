// routes/categoryRoute.js
import express from "express";
import { postCategory,deleteCategory, getCategory} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", postCategory)

categoryRouter.delete("/:name",deleteCategory)

categoryRouter.get("/",getCategory)


export default categoryRouter;//fix
