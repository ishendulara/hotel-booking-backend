import express from "express";
import { createGalleryItem, getGalleryItem } from "../controllers/galleryItemController.js";

const galleryItemRoutes = express.Router();

galleryItemRoutes.post("/",createGalleryItem)
galleryItemRoutes.get("/",getGalleryItem)


export default galleryItemRoutes;