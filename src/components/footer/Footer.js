import React from "react";
import "./footer.css";
import {BsLinkedin, BsInstagram, BsYoutube} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
  <footer>
    <a href="#" className="footer__logo">Della Rachmatika</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
    <a href="https://www.linkedin.com/in/della-rachmatika-noer-intanty-b3629129b/" target='_blank' rel="noreferrer"><BsLinkedin></BsLinkedin></a> 
        <a href="https://www.instagram.com/dlafrc/" target='_blank' rel="noreferrer"><BsInstagram></BsInstagram></a> 
        <a href="https://www.youtube.com/channel/UCq6Ss62XQXte_WWEmcDsCAA" target='_blank' rel="noreferrer"><BsYoutube></BsYoutube></a> 
        <a href="https://github.com/dlafrc" target='_blank' rel="noreferrer"><FaGithub></FaGithub></a> 
    </div>

    <div className="footer__copyright">
      <small>&copy; Della Rachmatika. All rights reserved.</small>
      <br></br>
    </div>
  </footer>
  )
};

export default Footer;
