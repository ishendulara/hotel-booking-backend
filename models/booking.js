import mongoose from "mongoose";

const bokkingSchema = new mongoose.Schema(
    {
        bookingId:{
            type : Number,
            required : true,
            unique : true
        },
        email:{
            type : String,
            required : true,
        },
        status:{
            type : String,
            
        }
    }
)