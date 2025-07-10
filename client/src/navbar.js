import React from "react";
import './navbar.css';

const Navbar=()=>{
    return(
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                    <h4>A</h4>
                </div>
                <ul className="nav-links">
                    <li className="item"><a href="#">Home</a></li>
                    <li className="item"><a href="#">About</a></li>
                    <li className="item"><a href="#">Skills</a></li>
                    <li className="item"><a href="#">Contact</a></li>
                </ul>
                <div className="burger-menu">

                </div>
            </nav>
        </div>
        
    )
}

export default Navbar;