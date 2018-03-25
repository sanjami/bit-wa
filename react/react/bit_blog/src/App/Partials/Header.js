import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-5 ">
                <Link to='/' className="brand-logo black-text">RND BLG</Link>
                <ul id="nav-mobile" className="right">
                    <li ><Link to='/' className="blue-text darken-4">Home</Link></li>
                    <li><Link to='/authors' className="blue-text darken-4">Authors</Link></li>
                    <li><Link to='/about' className="blue-text darken-4">About</Link></li>
                    <li><Link to='/posts/new' className="blue-text darken-4">Add post</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Header;