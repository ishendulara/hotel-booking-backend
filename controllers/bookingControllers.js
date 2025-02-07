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
           const newId =startingId + count + 1;
           const newBooking = new Booking({
            bookingId : newId,
            roomId : req.body.roomId,
            email : req.body.email,
            start : req.body.start,
            end : req.body.end
           })
           newBooking.save().then(
            (result)=>{
                res.json(
                    {
                        message : "Booking created Succesfully",
                        result : result
                    }
                )
            }
           ).catch(
            (err)=>{
                res.json({
                    message : "Booking creation Failed",
                    error : err
                })
            }
           )
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Booking Creation Failed",
                error : err
            })
        }
    )
}