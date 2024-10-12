import bodyParser from 'body-parser';
import express from "express";
import userRouter from './routes/usersRoute.js';
import mongoose from 'mongoose';
import galleryItemRoutes from './routes/galleryItemRoute.js';
import jwt from 'jsonwebtoken';

const app =  express()

app.use(bodyParser.json())

const connectionString = "mongodb+srv://ishendulara9:1234@cluster0.6qata.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//Authentication middleware

app.use(
    (req,res,next)=>{
        const token = req.header("Autherization")?.replace("Bearer","")

        if(token != null){
            jwt.verify(token,"Ishen@1060",(err,decoded)=>{
                if(decoded != null){
                    req.user = decoded
                    console.log("Decoded User",decoded)
                    next()
                }else{
                    next()
                }
            })
        }else{
            next()
        }
    }
)

 
mongoose.connect(connectionString).then(
    ()=>{
        console.log("connected to the database")
    }
).catch(
    ()=>{
        console.log("not connected")
    }
)


app.use("/api/users",userRouter)



app.listen(5000,(req,res)=>{
    console.log("server is running on port 5000")
})