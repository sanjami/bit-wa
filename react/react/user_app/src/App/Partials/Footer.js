import React from 'react';


const Footer = (props) => {

    return (
        <footer className="page-footer">
          <div className="footer-copyright row">
            <div className="container col s2 offset-s2">
            © 2014 Copyright Text
            </div>
            <div className="container col s2 offset-s2">
            {props.timer}
            </div>
          </div>
        </footer>
    )
}

export default Footer;