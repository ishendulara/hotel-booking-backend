import Booking from "../models/booking.js";

export function createBooking(req,res){

    var startingId = 1200;

    Booking.countDocuments({}).then(
        (count)=>{
           console.log(count);
           const newId = startingId + count;
        }
    )
}