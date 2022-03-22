import HeroSection from "./HeroSection";
import HotelCard from "./HotelCard";

import React, { useContext } from 'react'
import { Context } from '../../../context/Context'

export default function MainHomepage() {
  const {user, dispatch} = useContext(Context)
  
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  
  return (
    <div>
      <button onClick={handleLogout}>LOGOUT</button>
      <HeroSection></HeroSection>
      <HotelCard />
    </div>
  );
}
