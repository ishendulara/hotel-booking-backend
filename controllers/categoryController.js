// controllers/categoryController.js in hear
import Category from "../models/category.js";

export function postCategory(req, res) {
  if (req.user == null) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }
  if (req.user.type != "admin") {
    res.status(403).json({
      message: "Forbidden",
    });
    return;
  }

  const newCategory = new Category(req.body);

  newCategory
    .save()
    .then((result) => {
      res.json({
        message: "Category Created Successfullly",
        result: result,
      });
    })
    .catch((err) => {
      res.json({
        message: "Category Addition Failed",
        error: err,
      });
    });
}

//delete category
export function deleteCategory(req, res) {
  if (req.user == null) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }

  if (req.user.type != "admin") {
    res.status(403).json({
      message: "Forbidden",
    });
    return;
  }
  const name = req.params.name;

  Category.findOneAndDelete({ name: name })
    .then(() => {
      res.json({
        message: "Deleted successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "Category deletion failed",
      });
    });
}

export function getCategory(req, res) {
  Category.find()
    .then((result) => {
      res.json({
        categories: result,
      });
    })
    .catch(() => {
      res.json({
        message: "Failed to get categories",
      });
    });
}

export function getCategoryByName(req, res) {
  const name = req.params.name;
  Category.findOne({ name: name })
    .then((result) => {
      if (result == null) {
        res.json({
          message: "Category not found",
        });
      } else {
        res.json({
          Category: result,
        });
      }
    })
    .catch(() => {
      res.json({
        message: "Failed to get category",
      });
    });
}

export function updateCategory(req,res){

  //const isAdminValid = isAdminValid(req) we can call it in brackets

  if (!isAdminValid(req)) {
    res.status(401).json({
      message: "Unauthorized",
    })
    return
  }
   
  const name = req.params.name; //as the name of the category you want to update

  Category.updateOne({name:name},req.body).then(    //procedeur
    ()=>{
      res.json({
        message: "category updated sucsessfully"
      })
    }).catch(
      ()=>{
        res.json({
          message : "failed to update category"
        })
      }
    )
}  

function isAdminValid(req){
  if(req.user == null){
    return false//not a user
  }
  if (req.user.type != "admin") {
    return false//not a admin
  }
  return true//now he is a admin
}