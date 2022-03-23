import HeroSection from "./HeroSection";
import HotelCard from "./HotelCard";
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context/Context'
import axios from "axios"

export default function MainHomepage() {
  const {user, dispatch} = useContext(Context)
  const [hotels, setHotels] = useState([])
  
  useEffect(()=>{
    var fetchHotels = async() =>{
      var res= await axios.get("http://localhost:5000/hotel/getAllHotel")
      setHotels(res.data)
    }
    fetchHotels()
  })
  
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  
  return (
    <div style={{margin:"auto 0", overflowX:"hidden"}}>
      <div style={{width:"100%", height:"4rem", backgroundColor:"black", display:"block", boxShadow:"0px 7px 11px 0px #737373"}}>
        <div style={{display:"flex", justifyContent:"space-around", paddingTop:"1rem"}}>
          <h4 style={{color:"white"}}>Welcome to BooknStay</h4>
          <button style={{color:"white", display:"flex", justifyContent:"flex-end"}} onClick={handleLogout}>Logout</button>
        </div>
        
      </div>
      <HeroSection></HeroSection>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{width:"25rem", backgroundColor:"red"}}>

        </div>
        <div style={{display:"flex", margin:"20px", flexWrap:"wrap"}}>
          {
            hotels.map((hotel)=>(
              <HotelCard id={hotel._id} hotel_name={hotel.hotel_name} city={hotel.address.city} hotel_rating={hotel.hotel_rating} price={hotel.price} user_rating={hotel.userRating}></HotelCard>
            ))
          }

        </div>

      </div>


    </div>
  );
}
