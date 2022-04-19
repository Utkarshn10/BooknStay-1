import express from "express";
const router = express.Router();

import {addHotel, deleteHotel, getHotel, updateHotel, getAllHotel, getAllHotelByCity} from "../controllers/hotelDetailsController.js";

router.post("/addHotel", addHotel);
router.put("/updateHotel/:hotelId", updateHotel);
router.delete("/deleteHotel/:adminid", deleteHotel);
router.get("/getHotel/:adminid", getHotel);
router.get("/getAllHotel", getAllHotel);
router.get("/getHotelsByCity", getAllHotelByCity);

export default router;