import React from 'react';
import "./Footer.css"

import Github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"

const Footer = () => {
    return (

        <div className="Footer-container">
            <hr/>
            <br/><br/>
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/mr-ilyass">  <img src={Github}  alt=""/></a>

                    <a href="https://www.instagram.com/its.me.ily4ss/"><img src={instagram} alt=""/></a>
                    <a href="https://www.linkedin.com/in/ilyass-asri/"><img src={linkedin} alt=""/></a>


                </div>

                <div className="logo-f">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <div className="blur blur-footer-1"></div>
            <div className="blur blur-footer-2"></div>
        <br/><br/><br/>
        <br/><br/><br/>
        </div>
    );
};

export default Footer;
