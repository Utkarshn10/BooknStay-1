import React, {useContext, useEffect, useState} from 'react'
import {Context} from "../../../context/Context";
import axios from "axios";
import { Link } from 'react-router-dom';
import UpdateHotel from './UpdateHotel';

export const AdminHomepage = (props) => {
    const {user, dispatch} = useContext(Context);
    const [hotel, setHotel] = useState([])
    const [hotelName, setHotelName] = useState("")
    const [hotelRating, setHotelRating] = useState("")
    const [hotelDesc, setHotelDesc] = useState("")
    const [hotelPrice, setHotelPrice] = useState("")
    const [hotelCheckin, setHotelCheckin] = useState("")
    const [hotelCheckout, setHotelCheckout] = useState("")
    const [hotelAmenties, setHotelAmenties] = useState("")
    const [hotelUserRating, setHotelUserRating] = useState("")

    const [locality, setLocality] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [pincode, setPincode] = useState()
    const [country, setCountry] = useState()


    useEffect(() => {
        var fetchHotels = async () => {
          var res = await axios.get(`http://localhost:5000/hotel/getHotel/${user.result._id}`);
          setHotel(res.data);
          console.log(hotel)
          if(hotel.length != 0){
            setHotelName(res.data[0].hotel_name)
            setHotelRating(res.data[0].hotel_rating)
            setHotelDesc(res.data[0].hotel_desc)
            setHotelPrice(res.data[0].price)
            setHotelCheckin(res.data[0].check_in)
            setHotelCheckout(res.data[0].check_out)
            setHotelAmenties(res.data[0].amenties)
            setLocality(res.data[0].address.locality)
          setCity(res.data[0].address.city)
          setState(res.data[0].address.state)
          setPincode(res.data[0].address.pincode)
          setCountry(res.data[0].address.country)
          //   setHotelAddress(hotel[0].address)
            setHotelUserRating(res.data[0].userRating)
          }

        };
        fetchHotels();
        // setHotelName(hotel[0].hotel_name)
      });

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
      };

    const handleUpdate =() =>{
        
    }

    const handleDelete = async () =>{
    console.log("anna")
      await axios.delete(`http://localhost:5000/hotel/deleteHotel/${user.result._id}`);
      window.location.reload(false)
    }
    
  return(
    <header style={HeaderStyle}>
      <div
        style={{
          width: "100%",
          height: "4rem",
          backgroundColor: "black",
          display: "block",
          boxShadow: "0px 7px 11px 0px #737373",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "1rem",
          }}
        >
          <h4 style={{color: "white"}}>Welcome to BooknStay</h4>
          <button
            style={{
              color: "white",
              display: "flex",
              justifyContent: "flex-end",
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

    {
        hotel.length == 0 ? 
        <div>
            <h1>No Data to Display</h1>
            <Link to="/addHotel" >Add Hotel</Link>
        </div>
        :

        <div>
                  <div>
          <p>Hotel Name: {hotelName}</p>
          <p>Hotel Description: {hotelDesc}</p>
          <p>Hotel Price: {hotelPrice}</p>
          <p>Hotel Rating: {hotelRating}</p>
          <p>User Rating: {hotelUserRating}</p>
          <p>Amenties: {hotelAmenties}</p>
          <p>Hotel Check-in: {hotelCheckin}</p>
          <p>Hotel Check-out: {hotelCheckout}</p>
          <p>Address: {locality}, {city}, {state}, {country}, {pincode}</p>


      </div>
      
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Link to="/updateHotel">Update</Link>
            <a onClick={handleDelete}>Delete</a>

          </div>
        </div>
    }

    </header>


   )

 }

 const HeaderStyle = {
    width: "100%",
    height: "100%",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  