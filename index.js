// main app.js
import bodyParser from 'body-parser';
import express from "express";
import userRouter from './routes/usersRoute.js';
import mongoose from 'mongoose';
import galleryItemRoutes from './routes/galleryItemRoute.js';
import jwt from 'jsonwebtoken';
import categoryRouter from './routes/categoryRoute.js'; // Fixed typo

const app = express();

app.use(bodyParser.json());

const connectionString = "mongodb+srv://ishendulara9:1234@cluster0.6qata.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Authentication middleware
app.use((req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", ""); // Fixed extraction

    if (token != null) {
        jwt.verify(token, "Ishen@1060", (err, decoded) => {
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

