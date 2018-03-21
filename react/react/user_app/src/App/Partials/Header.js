import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {

    const showListIcon = () => {
        return <li><a href="#" onClick={props.handleClick}><i className="material-icons">view_list</i></a></li>
    };

    const showGridIcon = () => {
        return <li><a href="#" onClick={props.handleClick}><i className="material-icons">view_module</i></a></li>
    }

    const showNav = () => {
        if(props.currentPage === "/"){
            return (
                <ul className="right hide-on-med-and-down">

                    <li><a href="#" onClick={props.handleRefresh}><i className="material-icons">refresh</i></a></li>
                    {props.iconToShow ? showListIcon() : showGridIcon()}
                    <li><Link to='./About'>About</Link></li>
                </ul>
            )
        }
    }

    return (
        <React.Fragment>
        <nav>
            <div className="nav-wrapper">
                <a href="#/" className="brand-logo center">BIT People</a>
                {showNav()}               
            </div>
        </ nav>
        
        </React.Fragment>
    )
}

export default Header;