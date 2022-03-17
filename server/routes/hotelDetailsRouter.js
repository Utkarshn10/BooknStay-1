import express from "express";
const router = express.Router();

import {addHotel, deleteHotel, getHotel, updateHotel} from "../controllers/hotelDetailsController.js";

router.post("/addHotel", addHotel);
router.put("/updateHotel/:hotelId", updateHotel);
router.delete("/deleteHotel/:hotelId", deleteHotel);
router.get("/getHotel/:hotelId", getHotel);

export default router;