// routes/categoryRoute.js
import express from "express";
import { postCategory} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", postCategory);
categoryRouter.delete("/:name");


export default categoryRouter;//fix
