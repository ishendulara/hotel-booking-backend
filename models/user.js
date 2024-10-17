import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        email :{
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        },
        firstName :{
            type : String,
            required : true
        },
        lastName :{
            type : String,
            required : true
        },
        type : {
            type : String,
            required : true,
            default : "customer"
        },
        whatsapp :{
            type : String,
            required : true
        },
        phone :{
            type : String,
            required :true
        },
        disabled : {
            type : Boolean,
            required : true,
            default : false
        },
        emailVerified :{
            type :Boolean,
            required : true,
            default : false
        }
    }
)

const User = mongoose.model("Users" , userSchema)
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzExNjE3ZDJjMDRkMTg4ZmZhODU4NTQiLCJlbWFpbCI6IklzaGVuZHVsYXJhOUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJ0eXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MjkxOTIzNTUsImV4cCI6MTcyOTM2NTE1NX0.SazJDMf87Ny8cyYB5DMr1LbF-3KRB28Iwz0AmddQ3lQ
export default User;