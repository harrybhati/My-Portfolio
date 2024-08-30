import React from 'react';
import './Contact.css'; // Assuming you have a separate CSS file for the Contact section styling
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title" >Contact Me</h2>
        <div className="contact-icons">
          <a href="mailto:harendrabhati98@gmail.com" className="contact-icon">
            <FaEnvelope size={150} className="contact-icon-img" />
            <span>Email</span>
          </a>
          <a href="https://wa.me/9760968863" className="contact-icon" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={150} className="contact-icon-img" />
            <span>WhatsApp</span>
          </a>
          <a href="https://www.linkedin.com/in/harendra-bhati-61372a1a2" className="contact-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={150} className="contact-icon-img" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/harrybhati" className="contact-icon" target="_blank" rel="noopener noreferrer">
            <FaGithub size={150} className="contact-icon-img" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
