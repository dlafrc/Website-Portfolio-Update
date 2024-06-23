import React, {useRef} from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import {BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l0ur7z8', 'template_mn9znp7', form.current, 'GRjEzz-JQ7zjlDYsk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon"></MdOutlineMailOutline>
            <h4>Email</h4>
            <h5>dellarachmatikani@gmail.com</h5>
            <a href="mailto:rodolfo-gm@hotmail.com" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"></BsLinkedin>
            <h4>Connect with Me!</h4>
            <a href="https://www.linkedin.com/in/della-rachmatika/" target="_blank" rel="noreferrer">See Profile</a>
          </article>
    
        </div>

        {/* ======= END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
