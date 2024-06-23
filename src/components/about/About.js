import React from "react";
import "./about.css";
import ME from "../../assets/me-about-developer.png";

// ==== Icons ==== // 
import { TbCertificate } from "react-icons/tb";
import { AiOutlineMobile } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbCertificate className="about__icon"></TbCertificate>
              <h5>Graphic Design Enthusiast</h5>
              </article>

            <article className="about__card">
              <AiOutlineMobile className="about__icon"></AiOutlineMobile>
              <h5>UI/UX Enthusiast</h5>
              </article>

  
          </div>

          <p>
          Hi! I'm Della Rachmatika Noer Intanty. Currently an undergraduate student majoring 
          in computer science education at Indonesian University of Education.
          <br />
          <br />
          I have a passion for making things visually appealing! Whether it's 
          crafting user-friendly designs or getting hands-on with editing,
           I enjoy the creative process. From enhancing user experiences to polishing and editing, 
          I find joy in making things look great. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
