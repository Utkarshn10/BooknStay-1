import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Home.scss";
import Navbar from "../../navbar/Navbar";
import ReactStars from 'react-rating-stars-component'
import { AmentiesCard } from "./AmentiesCard";
import RoomCard from "./RoomCard";
import { Carousel } from "react-bootstrap";

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
  const [amenties, setAmenties] = useState([])
  const [pics, setPics] = useState([])
  let arr=[]
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
      setAmenties(res.data.amenties)
      console.log(amenties)
      setPics(res.data.photos)
 
      
      for(let i = 0; i<amenties.length; i++){
        arr.push(amenties[i])
      }
      console.log(arr, "ARRRAYA")

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
        {
          amenties.map((amenty)=>(
            <AmentiesCard data={amenty}></AmentiesCard>
          ))
        }
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
            leisurely <day>                       </day>s by glistening pools or basked in relaxation at our
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
        <Carousel variant="dark">
          {pics.map((pic) =>(
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={pic.base64}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
      </section>

      <section>
      </section>

      <section className="spotlight">
        <h1 className="alt-font">ROOMS AVAILABLE</h1>
        <div className="card-row">
          <div className="card">
            <div>
              <img src="/img/home/home_food.jpg" alt="home_food" />
            </div>
            <article>
              <h2 className="alt-font">Basic Room</h2>
              <p>
              A room with the facility of single bed/Double Bed. It is meant for single occupancy. It has an attached bathroom, a small dressing table, a small bedside table, and a small writing table. Sometimes it has a single chair too.
              </p>
              <p>Number of Beds: 1</p>
              <p>Maximum People Allowed: 2</p>
              <p>Price: 3000</p>
              <Link to="/dining">
                <button className="btn contrast">Discover More</button>
              </Link>
            </article>
          </div>
          <div className="card">
            <div>
              <img src="/img/home/home_room.jpg" alt="home_room" />
            </div>
            <article>
              <h2 className="alt-font">Deluxe Room</h2>
              <p>
              available in Single Deluxe and Double Deluxe variants. Deluxe room is well furnished. Some amenities are attached bathroom, a dressing table, a bedside table, a small writing table, a TV, and a small fridge. The floor is covered with carpet and most suitable for small families.
              </p>
              <p>Number of Beds: 1</p>
              <p>Maximum People Allowed: 4</p>
              <p>Price: 5000</p>
              <Link to="/rooms">
                <button className="btn contrast">Discover More</button>
              </Link>
            </article>
          </div>
          <div className="card">
            <div>
              <img src="/img/home/home_tour.jpg" alt="home_food" />
            </div>
            <article>
              <h2 className="alt-font">Twin Room</h2>
              <p>
              This room provides two single beds with separate headboards. It is meant for two independent people. It also has a single bedside table shared between the two beds. It also has a single bedside table shared between the two beds.
              </p>
              <p>Number of Beds: 1</p>
              <p>Maximum People Allowed: 4</p>
              <p>Price: 5000</p>
              <Link to="/tours">
                <button className="btn contrast">Discover More</button>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      {/* <section>
        <RoomCard></RoomCard>
      </section> */}
    </div>
  );
};

export default HotelPage;
