<<<<<<< HEAD
import React, {useState, useContext} from "react";
import axios from "axios";
import {Context} from "../../../context/Context";
import FileBase from "react-file-base64";
import {NavItem} from "react-bootstrap";
=======
import React, {useState, useContext} from 'react'
import axios from 'axios'
import {Context} from "../../../context/Context"
import { Link } from "react-router-dom";

>>>>>>> ef5523176d3cf066b625ea5ca9e0bb692aba4048

export default function NewHotelDetails() {
  const {user} = useContext(Context);
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
  const [array, setArray] = useState([]);

  const [amenties, setAmenties] = useState();

  const [gym, setGym] = useState(false);
  const [spa, setSpa] = useState(false);
  const [ele, setElevator] = useState(false);
  const [drycleaning, setDrycleaning] = useState(false);
  const [housekeeping, setHouseKeeping] = useState(false);
  const [parking, setParking] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [indoorsports, setIndoorSports] = useState(false);

  // const fileBase64 = (img) => {
  //   return new Promise((resolve, reject) => {
  //     let fileReader = new FileReader();
  //     fileReader.onerror = reject;
  //     fileReader.onload = function () {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.readAsDataURL(img);
  //   });
  // };

  // const handleImage = (e) => {
  //   let image = e.target.files;

  //   Promise.all(Array.from(image).map(this.readAsDataURL))
  //     .then((urls) => {
  //       setArray(urls);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("called");
    let arr = [];

    if (gym) {
      arr.push("gym");
    }
    if (drycleaning) {
      arr.push("drycleaning");
    }
    if (spa) {
      arr.push("spa");
    }
    if (ele) {
      arr.push("ele");
    }
    if (housekeeping) {
      arr.push("housekeeping");
    }
    if (parking) {
      arr.push("parking");
    }
    if (indoorsports) {
      arr.push("indoorsports");
    }
    if (smoking) {
      arr.push("smoking");
    }

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
        photos: array,
        price: price,
        userRating: userRating,
        amenties: arr,
      });
      console.log(res.data);
    } catch (err) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="hotelname"
          onChange={(e) => setHotelName(e.target.value)}
        />
        <input
          type="text"
          placeholder="hotelname"
          onChange={(e) => setHotelDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="hotelrating"
          onChange={(e) => setHotelrating(e.target.value)}
        />
        <input
          type="text"
          placeholder="locality"
          onChange={(e) => setLocality(e.target.value)}
        />
        <input
          type="text"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="state"
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="checkin"
          onChange={(e) => setCheckin(e.target.value)}
        />
        <input
          type="text"
          placeholder="checkout"
          onChange={(e) => setCheckout(e.target.value)}
        />
        <input
          type="number"
          placeholder="pincode"
          onChange={(e) => setPincode(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="userRating"
          onChange={(e) => setUserrating(e.target.value)}
        />

        <div>
          <FileBase
            type="file"
            multiple={true}
            onDone={(base64) => {
              setArray(base64);
              console.log(base64);
            }}
          />
        </div>

        <input type="checkbox" onChange={(e) => setGym(e.target.value)}></input>
        <input type="checkbox" onChange={(e) => setSpa(e.target.value)}></input>
        <input
          type="checkbox"
          onChange={(e) => setElevator(e.target.value)}
        ></input>
        <input
          type="checkbox"
          onChange={(e) => setDrycleaning(e.target.value)}
        ></input>
        <input
          type="checkbox"
          onChange={(e) => setHouseKeeping(e.target.value)}
        ></input>
        <input
          type="checkbox"
          onChange={(e) => setParking(e.target.value)}
        ></input>
        <input
          type="checkbox"
          onChange={(e) => setSmoking(e.target.value)}
        ></input>
        <input
          type="checkbox"
          onChange={(e) => setIndoorSports(e.target.value)}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
