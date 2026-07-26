import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top-curve">
      <div className="curve-line"></div>
      </div>

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo-link">
          <img
          src="/images/logo.png"
          alt="Ultimate7 Logo"
          className="footer-logo"
          />
         </a>

          <h2>
            Ultimate<span>7</span>
          </h2>

          <h3>Fitness Center</h3>

        </div>

        {/* Navigation */}

        <div className="footer-nav">
          <h3>Quick links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#membership">Membership</a>
          <a href="#trainers">Trainers</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Contact */}

        <div className="footer-contact">

        <h3>Contact</h3>

        <p>
        <FaMapMarkerAlt className="contact-icon" />
        <a
        href="https://maps.app.goo.gl/sxpdbNSHTCF3SHGJ6"
        target="_blank"
        rel="noopener noreferrer"
        >
        Hyderabad, Sindh
        </a>
        </p>

        <p>
        <FaPhoneAlt className="contact-icon" />
        <a href="tel:+923173244455">
        0317-3244455
        </a>
        </p>

        <p>
        <FaEnvelope className="contact-icon" />
          <a href="mailto:ultimate7fitnesscenter@hotmail.com">
          ultimate7fitnesscenter@hotmail.com
          </a>
         </p>

        </div>

         <div className="footer-hours">

         <h4>🕒 Opening Hours</h4>
         <br/>
         <p>Mon – Sun : 7:00 AM – 1:00 AM</p>
         <br/>
         <p>Friday : Closed</p>

      </div>

      </div>

      {/* Social */}


    <div className="footer-social">

      {/* Instagram */}
      <a
      href="https://www.instagram.com/ultimate7fitnesscenter"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
  >
      <FaInstagram />
      </a>

      {/* Facebook */}
      <a
      href="https://www.facebook.com/p/Ultimate7-Fitness-61582520072170/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
  >
      <FaFacebookF />
      </a>

      {/* WhatsApp */}
      <a
      href="https://wa.me/923173244455"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
  >
      <FaWhatsapp />
      </a>

    </div>

      <div className="footer-bottom">

        <p>
          © 2026 Ultimate7 Fitness Center • All Rights Reserved
        </p>
        <p>
          designed by AliyxnKhxn • 
        </p>

      </div>

    </footer>
  );
}

export default Footer;