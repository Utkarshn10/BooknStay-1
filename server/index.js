import express from "express";
import mongoose from "mongoose"; // Data Base
import cors from "cors"; // for Cross-Origin
import dotenv from "dotenv";
// import bookingRoutes from "./routes/bookings.js";
import roomRoutes from "./routes/rooms.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";
import hotelDetailsRouter from "./routes/hotelDetailsRouter.js";
import roomDetailsRouter from "./routes/roomDetailsRouter.js";
import bookingRoutes from "./routes/hotelBookingsRouter.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: "30mb" }));

app.use(cors());

// 0
app.use("/rooms", roomRoutes);

// 1
app.use("/bookings", bookingRoutes);


// 1
app.use("/auth", authRoutes);

//1
app.get("/", (req, res) => {
  res.send("Hello to Suay Resort API");
});


//1
app.use("/user", userRoutes);

//1
app.use("/admin", adminRoutes);

//1
app.use("/hotel", hotelDetailsRouter)

//1
app.use("/room", roomDetailsRouter)

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{console.log("COnnected to DB")})
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
