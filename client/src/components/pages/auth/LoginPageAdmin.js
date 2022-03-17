import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function LoginPageAdmin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [admin, setAdmin] = useState()
    const handleRegister = async(e) =>{
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:5000/admin/adminsignin", {

                email:email,
                password:password,
            })

            setAdmin(res.data)
            console.log(res.data)

        }catch(err){
            console.log(err)

        }

        

    }
    return (
   
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home" onSubmit={handleRegister}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="email"onChange={(e)=>{setEmail(e.target.value)}}required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}  required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/AdminRegister">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
