// controllers/categoryController.js in hear
import Category from "../models/category.js";

export function postCategory(req, res) {

  if (req.user == null) {
    res.status(401).json({
      message: "Unauthorized"
    })
    return
  }
  if (req.user.type != "admin") {
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

export function getCategory(req, res) {
  Category.find()
    .then((list) => {
      res.json({
        list: list,
      });
    })
    .catch((err) => {
      // Catch possible errors
      res.status(500).json({
        message: "Failed to fetch categories",
        error: err,
      });
    });
}
