import React, {useState, useContext} from 'react'
import axios from 'axios'
import {Context} from "../../../context/Context"

export default function NewRoomDetails() {
    const {user}= useContext(Context)

    const [roomType, setRoomtype] = useState("")
    const [roomDesc, setRoomDesc] = useState(0)
    const [beds, setBeds] = useState(0)
    const [ppl, setPpl] = useState(0)
    const [price, setPrice] = useState(0)
    const [numberRooms, setNumberRooms] = useState(0)



    const handleSubmit = async(e) =>{
        console.log("called")

        try{
            const res = await axios.post("http://localhost:5000/room/addroom", { 
                room_type:roomType,
                room_desc:roomDesc,
                no_of_beds:beds,
                max_ppl:ppl,
                photos:"",
                amenties:["a", "nskd"],
                price:price,
                no_of_rooms:numberRooms
            })
            console.log(res.data)
        }catch(err){
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Room Type' onChange={(e)=>setRoomtype(e.target.value)}  />
            <input type="text" placeholder='Room Description' onChange={(e)=>setRoomDesc(e.target.value)}  />
            <input type="number" placeholder='Number of Beds' onChange={(e)=>setBeds(e.target.value)}  />
            <input type="text" placeholder='Allowed People' onChange={(e)=>setPpl(e.target.value)}  />
            <input type="text" placeholder='Price' onChange={(e)=>setPrice(e.target.value)} />
            <input type="text" placeholder='Number of Rooms' onChange={(e)=>setNumberRooms(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        {/* {console.log(hotelrating)} */}
    </div>
  )
}