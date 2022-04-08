import React, {useState, useContext} from "react";
import axios from "axios";
import {Context} from "../../../context/Context";

import BackgroundImage from "../../pages/auth/assets/bg.png";

export default function NewRoomDetails() {
  const {user} = useContext(Context);

  const [roomType, setRoomtype] = useState("");
  const [roomDesc, setRoomDesc] = useState("");
  const [beds, setBeds] = useState(0);
  const [ppl, setPpl] = useState(0);
  const [price, setPrice] = useState(0);
  const [numberRooms, setNumberRooms] = useState(0);

  const clear = () => {
    setRoomtype("");
    setRoomDesc(0);
    setBeds(0);
    setPpl(0);
    setPrice(0);
    setNumberRooms(0);
  };
  const handleSubmit = async (e) => {
    console.log("called");

    try {
      const res = await axios.post("http://localhost:5000/room/addroom", {
        room_type: roomType,
        room_desc: roomDesc,
        no_of_beds: beds,
        max_ppl: ppl,
        photos: "",
        amenties: ["a", "nskd"],
        price: price,
        no_of_rooms: numberRooms,
      });
      console.log(res.data);
    } catch (err) {}
  };

  return (
    <header style={HeaderStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <form
          style={{
            width: "40%",
          }}
          onSubmit={handleSubmit}
        >
          <input
            className="col1"
            style={{padding: "3px"}}
            type="text"
            placeholder="Room Type"
            onChange={(e) => setRoomtype(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="col2"
            style={{padding: "3px"}}
            type="text"
            placeholder="Room Description"
            onChange={(e) => setRoomDesc(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            style={{padding: "3px"}}
            type="number"
            placeholder="Number of Beds"
            onChange={(e) => setBeds(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            style={{padding: "3px"}}
            type="text"
            placeholder="Allowed People"
            onChange={(e) => setPpl(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            style={{padding: "3px"}}
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            style={{padding: "3px"}}
            type="text"
            placeholder="Number of Rooms"
            onChange={(e) => setNumberRooms(e.target.value)}
          />
          <br></br>
          <br></br>
          <button
            style={{
              padding: "3px",
              backgroundColor: "black",
              color: "white",
              fontSize: "20px",
              borderRadius: "5px",
              padding: "0 10px",
              marginTop: "8px",
            }}
            type="submit"
          >
            Submit
          </button>
          <button
            onClick={clear}
            style={{
              padding: "3px",
              marginLeft: "1rem",
              backgroundColor: "black",
              color: "white",
              fontSize: "20px",
              borderRadius: "5px",
              padding: "0 10px",
              marginTop: "8px",
            }}
            type="submit"
          >
            Add More
          </button>
        </form>
        {/* {console.log(hotelrating)} */}
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
