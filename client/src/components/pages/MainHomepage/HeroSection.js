import React from 'react'
import { Link } from 'react-router-dom'

import "../../../../src/App.css"
import BookWidget from '../../booking/BookWidget'

import BackgroundImage from '../../pages/auth/assets/bg.png'

export default function HeroSection() {
    return (
        <header style={ HeaderStyle }>
            <div style={{paddingTop:"20rem"}}><BookWidget></BookWidget></div>
            {/* <p className="main-para text-center">join us now and don't waste time</p> */}
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}