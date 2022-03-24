import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home.scss";
import Navbar from "../../navbar/Navbar";
import ReactStars from 'react-rating-stars-component'
import { AmentiesCard } from "./AmentiesCard";
import RoomCard from "./RoomCard";

const HotelPage = () => {
  const id= window.location.pathname.split("/")
  const hotelId=id[2]
  const [hotelDetail, setHotelDetail] = useState([])
  const [address, setAddress] = useState({})
  const [locality, setLocality] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [pincode, setPincode] = useState()
  const [country, setCountry] = useState()

  useEffect(()=>{
    const fetchHotel = async() =>{
      const res = await axios.get(`http://localhost:5000/hotel/getHotel/${hotelId}`, {
        hotelId: hotelId
      })
      setHotelDetail(res.data)
      console.log(hotelDetail)
      setLocality(res.data.address.locality)
      setCity(res.data.address.city)
      setState(res.data.address.state)
      setPincode(res.data.address.pincode)
      setCountry(res.data.address.country)


      // setAddress(res.data.addresss)
    }
    fetchHotel()
  })
  return (
    <div className="Home">
    <Navbar></Navbar>
      <header
        className="header-main"
        style={{
          background: ' no-repeat center/cover url("/img/home/home.jpg")',
        }}
      >
      </header>

      <section className="desc">
        {/* Hotel Name */}
        <h1 className="alt-font">{hotelDetail.hotel_name}</h1>

        {/* Hotel Address */}
        <p>{`${locality}, ${city}, ${state}, ${country}, ${pincode}`}</p>
        
        {/* Hotel Description */}
        <p>{hotelDetail.hotel_desc}</p>
        
        {/* Hotel Rating */}
        <div style={{margin:"0 auto"}}>
          <ReactStars
              count={5}
              value={hotelDetail.hotel_rating}
              size={50}
              edit={false}
            />
        </div>
      </section>

      {/* AMENTIES */}
      <div style={{display:"flex", justifyContent:"center", marginTop:"3rem"}}>
        <AmentiesCard></AmentiesCard>
        <AmentiesCard></AmentiesCard>
      </div>

      {/* TIMING */}
      <div style={{display:"flex", justifyContent:"center", marginTop:"3rem"}}>
        <p style={{marginRight:"2rem"}}>Check In Time: {hotelDetail.check_in}</p>
        <p>Check In Time: {hotelDetail.check_out}</p>
      </div>

      {/* PHOTO ALBUM */}
      <section className="desc_main">
        <article className="descLeft">
          <div className="bg-light"></div>
          <h1 className="alt-font">PHUKET IS CALLING</h1>
          <p>
            Welcome back to our Oceanside Resort, in the heart of Phuket's
            bustling, breathtaking city. Nestled between the dramatic peaks of
            Table Mountain and the roaring Atlantic Ocean, you’ll spend warm
            leisurely days by glistening pools or basked in relaxation at our
            spa, and balmy evenings sampling local flavours at our exquisite
            restaurants, Nobu, Vista Bar & Lounge and Isola. Let us show you
            another side to Phuket. Here&Now.
          </p>
          <h2>RESORT OPEN</h2>
          <Link to="/rooms">
            <button className="btn contrast">Discover More</button>
          </Link>
        </article>
        <div className="descRight">
          <img src="/img/home/home_resort.jpg" alt="home_resort" />
        </div>
      </section>

      {/* ROOMS */}
      <section>
        <RoomCard></RoomCard>
      </section>
    </div>
  );
};

export default HotelPage;
