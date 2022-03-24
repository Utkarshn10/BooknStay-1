import React, {useState, useContext} from 'react'
import axios from 'axios'
import {Context} from "../../../context/Context"
import { Link } from "react-router-dom";

import BackgroundImage from '../../pages/auth/assets/bg.png'



export default function NewHotelDetails() {
  const { user } = useContext(Context);
  const [hotelName, setHotelName] = useState("");
  const [hotelrating, setHotelrating] = useState(0);
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [pincode, setPincode] = useState(0);
  const [hotelDes, setHotelDesc] = useState("");
  const [userRating, setUserrating] = useState(0);
  const [amenties, setAmenties] = useState();

  const [gym, setGym] = useState(false);
  const [spa, setSpa] = useState(false);
  const [ele, setElevator] = useState(false);
  const [drycleaning, setDrycleaning] = useState(false);
  const [housekeeping, setHouseKeeping] = useState(false);
  const [parking, setParking] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [indoorsports, setIndoorSports] = useState(false);

  //   const [userinfo, setUserInfo] = useState({
  //     languages: [],
  //     response: [],
  //     temp: [],
  //   });

  //   let s="";

  //   const handleChange = (e) => {
  //     // Destructuring
  //     const { value, checked } = e.target;
  //     const { languages } = userinfo;

  //     console.log(`${value} is ${checked}`);

  //     // arr.push(1);
  //     // s=s+value;

  //     // console.log(s);

  //     // Case 1 : The user checks the box
  //     if (checked) {
  //       setUserInfo({
  //         languages: [...languages, value],
  //         response: [...languages, value],
  //       });
  //     }

  //     // Case 2  : The user unchecks the box
  //     else {
  //       setUserInfo({
  //         languages: languages.filter((e) => e !== value),
  //         response: languages.filter((e) => e !== value),
  //       });
  //     }
  //   };

  //   const print = (e)=>{
  //       console.log(s);
  //     //   console.log('hello')
  //   }

  // let arr=[];
  // const abc= (e)=>{
  //     if (gym){
  //         arr.push(gym);
  //     }
  //     if (drycleaning){
  //         arr.push(drycleaning);
  //     }
  //     if (spa){
  //         arr.push(spa);
  //     }
  //     if (ele){
  //         arr.push(ele);
  //     }
  //     if (housekeeping){
  //         arr.push(housekeeping);
  //     }
  //     if (parking){
  //         arr.push(parking);
  //     }
  //     if (indoorsports){
  //         arr.push(indoorsports);
  //     }
  //     if (smoking){
  //         arr.push(smoking);
  //     }

  //     setAmenties(e.target.value);
  //     console.log(arr);

  // }

  const handleSubmit = async (e) => {
    console.log("called");
    let arr = [];
    if (gym) {
      arr.push('gym');
    }
    if (drycleaning) {
      arr.push('drycleaning');
    }
    if (spa) {
      arr.push('spa');
    }
    if (ele) {
      arr.push('ele');
    }
    if (housekeeping) {
      arr.push('housekeeping');
    }
    if (parking) {
      arr.push('parking');
    }
    if (indoorsports) {
      arr.push('indoorsports');
    }
    if (smoking) {
      arr.push('smoking');
    }

    // setAmenties(arr);
    // console.log(arr);
    // console.log(amenties);
    // e.preventDefault()

    try {
      const res = await axios.post("http://localhost:5000/hotel/addhotel", {
        admin_id: user.result._id,
        hotel_name: hotelName,
        hotel_rating: hotelrating,
        hotel_desc: hotelDes,
        address: {
          locality: locality,
          city: city,
          pincode: pincode,
          state: state,
          country: country,
        },
        check_in: checkin,
        check_out: checkout,
        price: price,
        userRating: userRating,
        amenties: arr,
      });
      console.log(res.data);
    } catch (err) {}
  };

  return (
    <header style={ HeaderStyle }>
    <div style={{display:'flex',justifyContent:'center'}}>
      <form onSubmit={handleSubmit}  >
        <label for=''></label><br></br>
        <input
          type="text"
          placeholder="Hotelname"
          onChange={(e) => setHotelName(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="text"
          placeholder="HotelDescription"
          onChange={(e) => setHotelDesc(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="number"
          placeholder="HotelRating"
          onChange={(e) => setHotelrating(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="text"
          placeholder="Locality"
          onChange={(e) => setLocality(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="text"
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="text"
          placeholder="Checkin"
          onChange={(e) => setCheckin(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="text"
          placeholder="Checkout"
          onChange={(e) => setCheckout(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
        style={{padding:"3px"}}
          type="number"
          placeholder="Pincode"
          onChange={(e) => setPincode(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        /><br></br>
        <label for=''></label><br></br>
        <input
          type="number"
          placeholder="UserRating"
          onChange={(e) => setUserrating(e.target.value)}
        /><br></br>
        {/* <input
          className=""
          type="checkbox"
          name="languages"
          value="Elevator"
          id="flexCheckDefault"
          onChange={handleChange}
        />
        <input
          className=""
          type="checkbox"
          name="languages"
          value="DryCleaning"
          id="flexCheckDefault"
          onChange={handleChange}
        />
        <input
          className=""
          type="checkbox"
          name="languages"
          value="Housekeeping"
          id="flexCheckDefault"
          onChange={handleChange}
        />
        <input
          className=""
          type="checkbox"
          name="languages"
          value="Parking"
          id="flexCheckDefault"
          onChange={handleChange}
        /> */}
        </form>
        <form>

        <h3 style={{color:'black', fontweight:'bolder',fontWeight:'bold'}}> Other facilities </h3>
        
        <br></br>

        <div style={{display:"flex"}}>
          <label for="gym" style={{width:"50%"}}> Gym</label>
          <input type="checkbox"onChange={(e) => setGym(e.target.value)}></input><br></br>
        </div>

        <br></br>
        <div style={{display:"flex"}}>
        <label for="spa" style={{width:"50%"}}> Spa</label>
        <input type="checkbox" onChange={(e) => setSpa(e.target.value)}></input><br></br>
        
        </div>
        
        <br></br>

        <div style={{display:"flex"}}>
        <label for="elevator" style={{width:"50%"}}> Elevator</label>
        <input
          type="checkbox"
          onChange={(e) => setElevator(e.target.value)}></input><br></br>
        
        </div>
        <br></br>

        <div style={{display:"flex"}}>
        <label for="drycleaning" style={{width:"50%"}}> DryCleaning</label>
        <input
          type="checkbox"
          onChange={(e) => setDrycleaning(e.target.value)}
        ></input><br></br> 
        
        </div>
        <br></br>

        <div style={{display:"flex"}}>
        <label for="housekeeping" style={{width:"50%"}}>Housekeeping</label>
        <input
          type="checkbox"
          onChange={(e) => setHouseKeeping(e.target.value)}
        ></input><br></br>
        
        </div>
        <br></br>

        <div style={{display:"flex"}}>
        <label for="parking" style={{width:"50%"}}>Parking</label>
        <input
          type="checkbox"
          onChange={(e) => setParking(e.target.value)}
        ></input><br></br>
        
        </div>
        <br></br>

        <div style={{display:"flex"}}>
        <label for="smoking" style={{width:"50%"}}>Smoking</label>
        <input
          type="checkbox"
          onChange={(e) => setSmoking(e.target.value)}
        ></input><br></br>
        
        </div>
        <br></br>

        <div style={{display:"flex"}}>
        <label for="indoorsports" style={{width:"50%"}}>Indoorsports</label>
        <input
          type="checkbox"
          onChange={(e) => setIndoorSports(e.target.value)}
        ></input><br></br>
        </div>
        
        <br></br><br></br>

        <button type="submit" style={{backgroundColor:'black',color:'white',fontSize:'20px',borderRadius:"5px", padding:"0 10px", marginTop:"8px"}}>Submit</button>
      </form>
      {/* {console.log(hotelrating)} */}
      <>
        {/* <div className=""> */}
          {/* <div className=""> */}
            {/* <h3 className="">Choose all the facilities your hotel offer !</h3> */}

            {/* <form>
              <div className="">
                <div className="">
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Elevator"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Elevator
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="DryCleaning"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      DryCleaning
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Housekeeping"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Housekeeping
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Parking"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Parking
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="SmokingRoom"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      SmokingRoom
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Indoor Sports"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Indoor Sports
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Lounge"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Lounge
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Bar"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Bar
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Cafe"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Cafe
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Gym"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Gym
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="Spa and Salon"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      Spa and Salon
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="CCTV"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      CCTV
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="HomeTheatre"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      HomeTheatre
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="checkbox"
                      name="languages"
                      value="KidsClub"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label className="" htmlFor="flexCheckDefault">
                      KidsClub
                    </label>
                  </div>
                </div>
              </div>

              <div className="">
                <label htmlFor="exampleFormControlTextarea1"> </label>
                <textarea
                  className=""
                  name="response"
                  value={userinfo.response}
                  placeholder="The checkbox values will be displayed here "
                  id="floatingTextarea2"
                  style={{ height: "150px" }}
                  onChange={handleChange}
                ></textarea>
              </div>
            </form> */}
            {/* <form> */}
              {/* <input type="checkbox" onChange={(e)=> setGym(e.target.value)}></input>
                <input type="checkbox" onChange={(e)=> setSpa(e.target.value)}></input>
                <input type="checkbox" onChange={(e)=> setElevator(e.target.value)}></input>
                <input type="checkbox" onChange={(e)=> setDrycleaning(e.target.value)}></input>
                <input type="checkbox" onChange={(e)=> setHouseKeeping(e.target.value)}></input>
                <input type="checkbox" onChange={(e)=> setParking(e.target.value)}></input>
                <input type="checkbox" onChange={(e)=> setSmoking(e.target.value)}></input>
                <input type="checkbox" onChange={(e)=> setIndoorSports(e.target.value)}></input> */}
            {/* </form> */}
          {/* </div> */}
          {/* <button onClick={print}>Kuch bhi</button> */}
        {/* </div> */}
      </>

      {/* console.log(arr); */}
    </div>
    </header>
  );
}
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
