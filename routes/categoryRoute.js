// routes/categoryRoute.js
import express from "express";
import { postCategory} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", postCategory);

export default categoryRouter;//fix
