import mongoose from "mongoose";
import Room from "../models/room.js";
import { isAdminValid } from "./userControllers.js";

export function createRoom(req,res){

    if(!isAdminValid(req)){
        res.status(401).json({
            message: "Unauthorized",
          })
          return
    }

    const newRoom = newRoom(req.body)

    newRoom.save().then(
        (result)=>{
            res.json(
                {
                    message : "Room created Succesfully",
                    result : result
                }
            )
        }
    ).catch(
        (err)=>{
            res.json(
                {
                    message : "Room Creation Failed",
                    error : err
                }
            )
        }
    )
}

export function deleteRoom(req,res){

    if(!isAdminValid(req)){
        res.status(401).jason({
            message : "Unauthorized"
        })
        return
    }

    const roomId = req.params.roomId

    Room.findOneAndDelete({roomId:roomId}).then(
        ()=>{
            res.json({
                message : "Room deleted succesfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message:"Room deletion Failed"
            })
        }
    )
}

export function  findRoomById(req,res){

    const roomId = req.params.roomId

    Room.findOne({roomId:roomId}).then(
        (result)=>{
            if(result == null){
                res.status(401).json({
                    message : "Room not Found"
                })
                return
            }
            else{
                res.json({
                    message : "RoomFound",
                    result : result
                })
            }
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Room Search Failed",
                error : err
            })
        }
    )
}

export function getRooms(req,res){
    Room.find().then(
        (result)=>{
            res.json({
                rooms : result
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Failed to get Rooms"
            })
        }
    )
}

export function updateRoom(req,res){
    
    if (!isAdminValid(req)) {
        res.status(401).json({
          message: "Unauthorized",
        })
        return
      }
   
      const roomId = req.params.roomId

      Room.findOneAndUpdate({roomId:roomId},req.body).then(
        ()=>{
            res.json({
                message : "Room Updated succesfully"
            })
        }
      ).catch(
        ()=>{
            res.json({
                message : "Room updated failed"
            })
        }
      )
}