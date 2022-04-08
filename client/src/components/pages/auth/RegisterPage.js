import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const axios = require('axios');

export default function SignUpPage() {
    const history = useHistory();
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [user, setUser] = useState()

    const handleRegister = async(e) =>{
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:5000/user/signup", {
                firstName:firstname,
                lastName:lastname,
                email:email,
                password:password,
                phone:phone
            })

            setUser(res.data)
            history.push("/Customer");

        }catch(err){

        }

        

    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home" onSubmit={handleRegister}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="first_name" onChange={(e)=>{setFirstname(e.target.value)}} required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="last_name" onChange={(e)=>{setLastname(e.target.value)}} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={(e)=>{setEmail(e.target.value)}} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} required />
                </p>
                <p>
                    <label>Phone Number</label><br/>
                    <input type="number" name="phone" onChange={(e)=>{setPhone(e.target.value)}} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form> 
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
