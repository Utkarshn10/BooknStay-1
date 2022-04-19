import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import {Context} from "../../../context/Context";
import {Link} from "react-router-dom";
import FileBase from "react-file-base64";
import BackgroundImage from "../../pages/auth/assets/bg.png";
// import "./newHotelDetails.css";

export default function UpdateHotel() {
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

  return (
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

      <div style={{display: "flex", justifyContent: "center"}}>
        <form  className="form1">
          <div style={{width: "60%"}}>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Hotel Name"
              value={hotelName}
              // onChange={(e) => setHotelName(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Hotel Description"
              value={hotelDesc}
              // onChange={(e) => setHotelDesc(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="number"
              placeholder="Hotel Rating"
              value={hotelRating}
              // onChange={(e) => setHotelrating(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Locality"
              value={locality}
              // onChange={(e) => setLocality(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="City"
              value={city}
              // onChange={(e) => setCity(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="State"
              value={state}
              // onChange={(e) => setState(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Country"
              value={country}
              // onChange={(e) => setCountry(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Checkin"
              value={hotelCheckin}
              // onChange={(e) => setHotelCheckin(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="text"
              placeholder="Checkout"
              value={hotelCheckout}
              // onChange={(e) => setHotelCheckout(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="number"
              placeholder="Pincode"
              value={pincode}
              // onChange={(e) => setPincode(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="number"
              placeholder="Price"
              value={hotelPrice}
              // onChange={(e) => setHotelPrice(e.target.value)}
            />
            <br></br>
            <label for=""></label>
            <br></br>
            <input
              type="number"
              placeholder="UserRating"
              value={hotelUserRating}
              // onChange={(e) => setUserrating(e.target.value)}
            />
            <br></br>
          </div>
          <div style={{marginLeft: "5rem"}}>
            <h3
              style={{color: "black", fontweight: "bolder", fontWeight: "bold"}}
            >
              {" "}
              Other facilities{" "}
            </h3>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="gym" style={{width: "50%"}}>
                {" "}
                Gym
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                // onChange={(e) => setGym(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="spa" style={{width: "50%"}}>
                {" "}
                Spa
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                // onChange={(e) => setSpa(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="elevator" style={{width: "50%"}}>
                {" "}
                Elevator
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                // onChange={(e) => setElevator(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="drycleaning" style={{width: "50%"}}>
                {" "}
                DryCleaning
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                // onChange={(e) => setDrycleaning(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="housekeeping" style={{width: "50%"}}>
                Housekeeping
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                // onChange={(e) => setHouseKeeping(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="parking" style={{width: "50%"}}>
                Parking
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                // onChange={(e) => setParking(e.target.value)}
              ></input>

              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label for="smoking" style={{width: "50%"}}>
                Smoking
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                // onChange={(e) => setSmoking(e.target.value)}
              ></input>
              <br></br>
            </div>
            <br></br>
            <div style={{display: "flex"}}>
              <label style={{width: "50%"}} for="indoorsports">
                Indoorsports
              </label>
              <input
                className="checkbox1"
                type="checkbox"
                // onChange={(e) => setIndoorSports(e.target.value)}
              ></input>
              <br></br>
            </div>
            <div style={{margin: "1rem 0 0 0"}}>
              <h3
                style={{
                  color: "black",
                  fontweight: "bolder",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Upload Images{" "}
              </h3>
              <div style={{padding: "1rem "}}>
                <FileBase
                  type="file"
                  multiple={true}
                  onDone={(base64) => {
                    // setArray(base64);
                  }}
                ></FileBase>
              </div>
            </div>
            <br></br>
            <button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "24px",
                borderRadius: "5px",
                padding: "6px",
                marginTop: "8px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
const HeaderStyle = {
  width: "100%",
  height: "100%",
  // background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
