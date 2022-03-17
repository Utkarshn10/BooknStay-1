import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function SignInPage() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()


    const handleLogin = async(e) => {
        e.preventDefault()
        try{
          
            const res = await axios.post("http://localhost:5000/user/signin", {
                email:email,
                password:password
            })
            setUser(res.data)
            console.log(res.data)
        }catch(err){

        }
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home" onSubmit={handleLogin}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" onChange={(e)=>{setEmail(e.target.value)}} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required  onChange={(e)=>{setPassword(e.target.value)}}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
