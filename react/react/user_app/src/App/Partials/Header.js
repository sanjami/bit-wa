import React from 'react';

const Header = (props) => {

    const showListIcon = () => {
        return <li><a href="#" onClick={props.handleClick}><i className="material-icons">view_list</i></a></li>
    };

    const showGridIcon = () => {
        return <li><a href="#" onClick={props.handleClick}><i className="material-icons">view_module</i></a></li>
    }

    return (
        <nav>
            <div className="nav-wrapper">
             <a href="#" className="brand-logo center">BIT People</a>
            
            <ul className="right hide-on-med-and-down">
                <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                {props.iconToShow ? showListIcon() : showGridIcon()}
            </ul>
             </div>
        </ nav>
    )
}

export default Header;