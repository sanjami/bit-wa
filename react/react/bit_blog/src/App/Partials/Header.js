import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-5 ">
                <Link to='/' className="brand-logo black-text">RND BLG</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li ><Link to='/' className="blue-text darken-4">Home</Link></li>
                    <li><Link to='/Authors' className="blue-text darken-4">Authors</Link></li>
                    <li><Link to='/About' className="blue-text darken-4">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}



export default Header;