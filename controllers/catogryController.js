import Catogory from "../models/catogory.js"



export function postCatogory(req,res){


    const catogory = req.body.Catogory

    const newCatogory = new Catogory(catogory)

    newCatogory.save().then(
        ()=>{
            res.status(201).json({
                message : "Catogory Added Successfully"
            })
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "Catogory Added Failed",error: err
                
            })
        }
    )
}

export function getCatogory(req,res){
    Catogory.find().then(
        (list)=>{
            res.json({
                list : list
            })
        }
    )
}