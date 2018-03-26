import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-5 ">
            <div className='row'>
                <Link to='/' className="brand-logo black-text col s3 offset-s1 ">BIT Blog</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down col s4">
                    <li ><Link to='/' className="blue-text darken-4">Home</Link></li>
                    <li><Link to='/Authors' className="blue-text darken-4">Authors</Link></li>
                    <li><Link to='/About' className="blue-text darken-4">About</Link></li>
                    <li><Link to='/posts/new' className="blue-text darken-4">New Post</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}



export default Header;