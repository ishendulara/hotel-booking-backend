import express from "express";
import {postCatogory, getCatogory} from "../controllers/catogryController.js"

const catogoryRouter = express.Router();

catogoryRouter.post("/",postCatogory)
catogoryRouter.get("/",getCatogory)

export default catogoryRouter;