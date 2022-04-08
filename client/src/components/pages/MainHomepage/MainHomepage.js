import HotelCard from "./HotelCard";
import React, {useContext, useEffect, useState, useRef} from "react";
import {Context} from "../../../context/Context";
import axios from "axios";
import BookWidget from "../../booking/BookWidget";
import BackgroundImage from "../../pages/auth/assets/homepageImage.jpg";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function MainHomepage() {
  const {user, dispatch} = useContext(Context);
  const [hotels, setHotels] = useState([]);
  const [Price, setPrice] = useState(false);
  const [Star, setStar] = useState(false);
  const [UserRating, setUserrating] = useState(false);



  useEffect(() => {
    var fetchHotels = async () => {
      var res = await axios.get("http://localhost:5000/hotel/getAllHotel");
      setHotels(res.data);
    };
    fetchHotels();
  });

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  };

  const myRef = useRef(null);

  const executeScroll = () => scrollToRef(myRef);

  return (
    <div style={{margin: "auto 0", overflowX: "hidden"}}>
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

      <div>
        <header style={HeaderStyle}>
          <div style={{paddingTop: "20rem"}}>
            <BookWidget></BookWidget>
            <div style={{display: "block", textAlign: "center"}}>
              <button
                style={{
                  color: "white",
                  fontSize: "30px",
                  backgroundColor: "green",
                  borderRadius: "5px",
                  padding: "0 10px",
                  marginTop: "10px",
                }}
                onClick={executeScroll}
              >
                Search
              </button>
            </div>
          </div>
        </header>
      </div>
      {/* <HeroSection></HeroSection> */}
      <div style={{display: "flex"}}>
        <div style={{width: "25rem", backgroundColor: "red"}}>
        <form style={{width:'100%'}}>
                <p>
                  
                    <label style={{fontWeight:'bold'}}>Price</label><br></br>
                    <div style={{display:"flex"}}>

                    <label style={{width:"50%"}}>  ₹0-₹2000</label>
                    <input type="checkbox"  onChange={(e)=>{setPrice(e.target.value)}} required />
                    </div>
                </p><br></br>
                
                <p>
                    <div style={{display:"flex"}}>
                    
                    <label style={{width:"50%"}}>₹2000-₹4000</label>
                    <input type="checkbox"  onChange={(e)=>{setPrice(e.target.value)}} required />
                    </div>
                    
                </p><br></br>
                <p>
                    <div style={{display:"flex"}}>
                    
                    <label style={{width:"50%"}}>₹4000-₹8000</label>
                    <input type="checkbox"  onChange={(e)=>{setPrice(e.target.value)}} required />
                    </div>
                </p><br></br>
                
                
            </form>
            <form style={{width:'100%'}} >
                <p>
                    <label ><strong>Star Category</strong></label><br></br>
                    <div style={{display:"flex"}}>
                      <label style={{width:"50%"}}>5-Star</label>
                      <input type="checkbox"  onChange={(e)=>{setStar(e.target.value)}} required />
                    </div>

                </p>
                
                <br></br>
                <p>
                    
                    <div style={{display:"flex"}}>
                      <label style={{width:"50%"}}>5-Star</label>
                      <input type="checkbox"  onChange={(e)=>{setStar(e.target.value)}} required />
                    </div>
                </p>
                
                <br></br>
                <p>
                    
                    <div style={{display:"flex"}}>
                      <label style={{width:"50%"}}>5-Star</label>
                      <input type="checkbox"  onChange={(e)=>{setStar(e.target.value)}} required />
                    </div>
                </p>
                
                <br></br>
                
                
            </form>
            <form style={{width:'100%'}} >
                <p>
                    <label><strong>User Rating</strong></label><br></br>

                    <div style={{display:"flex"}}>
                      <label style={{width:"50%"}}>4.5 & Above</label>
                      <input type="checkbox"  onChange={(e)=>{setUserrating(e.target.value)}} required />
                    </div>

                </p>
                
                <br></br>
                <p>
                    <div style={{display:'flex'}}>
                    <label style={{width:'50%'}}>4 & Above</label>
                    <input type="checkbox"  onChange={(e)=>{setUserrating(e.target.value)}} required />
                    </div>
                </p><br></br>
                <p>
                    <div style={{display:'flex'}}>  
                    <label style={{width:'50%'}}>3 & Above</label>
                    <input type="checkbox"  onChange={(e)=>{setUserrating(e.target.value)}} required />
                    </div>
                </p>
                
                
            </form>
                
        </div>
        <div
          ref={myRef}
          style={{display: "flex", margin: "20px", flexWrap: "wrap"}}
        >
          {hotels.map((hotel) => (
            <HotelCard
              id={hotel._id}
              hotel_name={hotel.hotel_name}
              city={hotel.address.city}
              hotel_rating={hotel.hotel_rating}
              price={hotel.price}
              user_rating={hotel.userRating}
            ></HotelCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
