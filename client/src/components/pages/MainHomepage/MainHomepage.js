import HeroSection from "./HeroSection";
import HotelCard from "./HotelCard";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../context/Context";
import axios from "axios";

export default function MainHomepage() {
  const {user, dispatch} = useContext(Context);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    var fetchHotels = async () => {
      var res = await axios.get("http://localhost:5000/hotel/getAllHotel");
      setHotels(res.data);
      console.log(res.data);
    };
    fetchHotels();
  });

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  };

  return (
    <div>
      <button onClick={handleLogout}>LOGOUT</button>
      <HeroSection></HeroSection>
      {hotels.map((hotel) => (
        <HotelCard
          hotel_name={hotel.hotel_name}
          city={hotel.address.city}
          hotel_rating={hotel.hotel_rating}
          photos={hotel.photos}
          price={hotel.price}
          user_rating={hotel.user_rating}
        ></HotelCard>
      ))}
    </div>
  );
}
