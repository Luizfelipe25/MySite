import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <a href="https://www.w3schools.com" target="_blank"><InstagramIcon /></a> 
       <a href="https://www.w3schools.com"><TwitterIcon /></a> 
       <a href="https://www.w3schools.com"> <FacebookIcon /></a> 
       <a href="https://www.w3schools.com"><LinkedInIcon /></a> 
      </div>
      <p> &copy; 2024 luizthedev.com</p>
    </div>
  );
}

export default Footer;
