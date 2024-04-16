import React from "react";
import "./footer.css";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer_content">
                <div className="footer_content_left">
                    <img src={assets.logo} width={250} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ratione eaque et quod velit, optio consequatur
                        amet. Distinctio, eaque. Perferendis nam neque modi qui
                        laudantium. Aut quod dignissimos molestias odio odit,
                        enim, aliquam dicta cum atque exercitationem qui
                        expedita. Quibusdam iste modi explicabo hic minus quia?
                        Non rem id ipsam eius.
                    </p>
                    <div className="footer_social_icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer_content_center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home </li>
                        <li>About us </li>
                        <li>Delivery </li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer_content_right">
                    <h2>GET IN TOUCH </h2>
                    <ul>
                        <li>+237-667-662-005 </li>
                        <li>ajaclif.belleful@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer_copyright">
                Copyright 2024 © Belle_ful.com - All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;
