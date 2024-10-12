import GalleryItem from "../models/galleryItem.js";

//create Gallery item

export function createGalleryItem(req,res){
    const user = req.user

    if(user == null){
        res.status(403).json({
        message :"Please Login to create gallery item"
        })
        return
    }

    if(user.type != "admin"){
        res.status(403).json({
            message : "you are not authorized to create gallery Item"
        })
        return
    }
   


    const galleryItem = req.body.item

    const newGalleryItem = new GalleryItem(galleryItem)

    newGalleryItem.save().then(
        ()=>{
            res.json({
                message : "Gallery item crreated succesfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message : "Gallery item crreateion failed"
            })
        }
    )

}
//Gallery item retrive 
export function getGalleryItem(req,res){
    GalleryItem.find().then(
        (list)=>{
            res.json({
                list : list
            })
        }
    )
}//then go to Route and create route 