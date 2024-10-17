// routes/categoryRoute.js
import express from "express";
import { deleteCategory, postCategory} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", postCategory);
categoryRouter.delete("/:name",deleteCategory);


export default categoryRouter;//fix
