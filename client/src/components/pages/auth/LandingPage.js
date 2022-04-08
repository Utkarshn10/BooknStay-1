import React from 'react'
import { Link } from 'react-router-dom'

import "../../../../src/App.css"

import BackgroundImage from './assets/last.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle}>
            <h1 className="main-title text-center" >BooknStay</h1>
            <p className="main-para text-center">A Heaven Like Experience</p>
            <div className="buttons text-center">
                <Link to="/Customer">
                    <button className="primary-button" >Customer</button>
                </Link>
                <Link to="/Admin">
                    <button className="primary-button" id="reg_btn"><span>Admin </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "120vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}