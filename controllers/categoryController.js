// controllers/categoryController.js
import Category from "../models/category.js";

export function postCategory(req, res) {
    const category = req.body; // Fixed issue here

    const newCategory = new Category(category);

    newCategory.save().then(() => {
        res.status(201).json({
            message: "Category Added Successfully"
        });
    }).catch((err) => { // Include error details
        res.status(500).json({
            message: "Category Addition Failed",
            error: err
        });
    });
}

export function getCategory(req, res) {
    Category.find().then((list) => {
        res.json({
            list: list
        });
    }).catch((err) => { // Catch possible errors
        res.status(500).json({
            message: "Failed to fetch categories",
            error: err
        });
    });
}
