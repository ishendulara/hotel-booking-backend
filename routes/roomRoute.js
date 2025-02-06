import express from "express";
import { createRoom, deleteRoom, findRoomById, getRooms, updateRoom } from "../controllers/roomControllers";

const roomRouter = express.Router();

roomRouter.post("/",createRoom)
roomRouter.delete("/:roomId",deleteRoom)
roomRouter.get("/:roomId",findRoomById)
roomRouter.get("/",getRooms)
roomRouter.put("/:roomId",updateRoom)


export default roomRouter;