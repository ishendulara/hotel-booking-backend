import mongoose from "mongoose";

const galleryItemSchema = mongoose.Schema(
    {
         name:{
            type : String,
            required : true
         },
         image :{
            type : String,
            required : true
         },
         Description:{
            type : String,
            required : true
         }
    }
)

const GalleryItem = mongoose.model("galleryItems",galleryItemSchema)

export default GalleryItem;//then got controllers and create gallery item Controlers