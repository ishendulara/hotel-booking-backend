import Booking from "../models/booking.js";
import { isCustomerValide } from "./userControllers.js";

export function createBooking(req,res){

    if(!isCustomerValide(req)){
        res.status(403).json({
            message : "Forbidden"
        })
        return
    }

    const startingId = 1200;

    Booking.countDocuments({}).then(
        (count)=>{
           console.log(count);
           const newId = "INV"+startingId + count + 1;
        }
    )
}