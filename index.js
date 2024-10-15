// main app.js
import bodyParser from 'body-parser';
import express from "express";
import userRouter from './routes/usersRoute.js';
import mongoose from 'mongoose';
import galleryItemRoutes from './routes/galleryItemRoute.js';
import jwt from 'jsonwebtoken';
import categoryRouter from './routes/categoryRoute.js'; // Fixed typo
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(bodyParser.json());

const connectionString = process.env.MONGO_URL

// Authentication middleware
app.use((req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", ""); // Fixed extraction

    if (token != null) {
        jwt.verify(token, process.env.JWT_TOKEN_KEY, 
            (err, decoded) => {
            if (decoded != null) {
                req.user = decoded;
                console.log("Decoded User", decoded);
                next();
            } else {
                next();
            }
        });
    } else {
        next();
    }
});

mongoose.connect(connectionString).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Database connection failed", err);
});

app.use("/api/users", userRouter);
app.use("/api/gallery", galleryItemRoutes);
app.use("/api/category", categoryRouter); // Fixed typo

app.listen(5000, () => {
    console.log("Server is running on port 5000");//done
});

