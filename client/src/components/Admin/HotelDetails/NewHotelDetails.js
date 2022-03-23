import React, {useState, useContext} from "react";
import axios from "axios";
import {Context} from "../../../context/Context";
import FileBase from "react-file-base64";
export default function NewHotelDetails() {
  const [data, setData] = useState({});
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
  const [image, setImage] = useState({});

  const handleSubmit = async (e) => {
    console.log("called");
    // console.log(user.result._id)
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
        photos: image,
        check_out: checkout,
        price: price,
        userRating: userRating,
        prices: price,
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
            multiple={false}
            onDone={({base64}) => setImage(base64)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
