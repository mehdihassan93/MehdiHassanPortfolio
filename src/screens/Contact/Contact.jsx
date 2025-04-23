import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "./Contact.css";
import mailBackground from "../../assets/images/ContactMe/mailbackground.jpeg";

export default function Contact(props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_audjz9d',
      'template_5w8i4di',
      formData,
      'cBUYzSuUIDA0ohefi'
    )
    .then(() => {
      toast.success("Message Sent Successfully ✅");
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }, () => {
      toast.error("Failed to send message ❌ Try again!");
      setLoading(false);
    });
  };

  return (
    <div className="contact-container screen-container fade-in" id={props.id || ""}>
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-box">
        {/* Left Side */}
        <div className="left-side">
          <h2>Get In Touch 📧</h2>
          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook-f" /></a>
            <a href="https://github.com"><i className="fab fa-github" /></a>
            <a href="https://instagram.com"><i className="fab fa-instagram" /></a>
            <a href="https://youtube.com"><i className="fab fa-youtube" /></a>
            <a href="https://twitter.com"><i className="fab fa-twitter" /></a>
          </div>
          <p>Send Your Email Here!</p>
          <img src={mailBackground} alt="email background" className="mail-bg" />
        </div>

        {/* Right Side */}
        <form className="right-side" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="send-button" disabled={loading}>
            {loading ? "Sending..." : "Send ✈️"}
          </button>
        </form>
      </div>
    </div>
  );
}