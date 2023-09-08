import React from 'react'
import Logo from './Images/Group 10.png'

function Navbar(){
    return(
        <>
        <div class="nav-cont">
        <nav>
            <div class="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div class="nav-btn">
                <a href="./">Home</a>
                <a href="./">About Us</a>
                <a href="./">Connect</a>
            </div>
        </nav>
        <hr/>
    </div>
        </>

);

}

export default Navbar