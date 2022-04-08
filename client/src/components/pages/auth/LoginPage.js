import axios from 'axios'
import { fromUnixTime } from 'date-fns'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context/Context'
import { useHistory } from "react-router-dom";



export default function SignInPage() {
    const history = useHistory();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {user, dispatch, isFetching} = useContext(Context)


    const handleLogin = async(e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:5000/user/signin", {
                email:email,
                password:password
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            history.push("/");
        }catch(err){
            dispatch({type: "LOGIN_FAILURE"})
        }
    }

    console.log(user)

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
