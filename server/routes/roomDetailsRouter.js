import express from "express";
const router = express.Router();

import {addRoom, deleteRoom, getRoom, updateRoom} from "../controllers/roomDetailsController.js";

router.post("/addRoom", addRoom);
router.put("/updateRoom/:roomId", updateRoom);
router.delete("/deleteRoom/:roomId", deleteRoom);
router.get("/getRoom/:roomId", getRoom);

export default router;