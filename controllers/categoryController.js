// controllers/categoryController.js in hear
import Category from "../models/category.js";

export function postCategory(req, res){

  if(req.user == null){
    res.status(401).json({
      message: "Unauthorized"
    })
    return
  }
  if(req.user.type != "admin"){
    res.status(403).json({
      message: "Forbidden"
    })
    return
  }

  const newCategory = new Category(req.body)

  newCategory.save().then(
    (result) => {
      res.json(
        {
            message: "Category Created Successfullly",
            result : result
        }
      )
    }
  ).catch(
    (err)=>{
        res.json(
            {
                message: "Category Addition Failed",
                error : err
            }
        )
    }
  )
}

//delete category
export function deleteCategory(req,res){
  if(req.user == null){
    res.status(401).json({
      message : "Unauthorized"
    })
    return
  }
  if(req.user.type != "admin"){
    res.status(403).json({
      message : "Forbidden"
    })
    return
  }
  const name = req.params.name
  
  Category.findOneAndDelete({name:name}).then(
    ()=>{
      res.json({
        message : "Deleted successfully"
      })
    }
  ).catch(
    ()=>{
      res.json({
        message : "Category deletion failed"
      })
    }
  )
}