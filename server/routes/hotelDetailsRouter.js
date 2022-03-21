import express from "express";
const router = express.Router();

import {addHotel, deleteHotel, getHotel, updateHotel, getAllHotel} from "../controllers/hotelDetailsController.js";

router.post("/addHotel", addHotel);
router.put("/updateHotel/:hotelId", updateHotel);
router.delete("/deleteHotel/:hotelId", deleteHotel);
router.get("/getHotel/:hotelid", getHotel);
router.get("/getAllHotel", getAllHotel);

export default router;