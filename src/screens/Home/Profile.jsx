import React from "react";
import "./Profile.css";
import ScrollService from "../../services/ScrollService";
import { motion } from "framer-motion";
import Typed from "react-typed";
import profilePhoto from "../../assets/Home/profilephoto.jpeg";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        {/* Left section */}
        <motion.div
          className="profile-details"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="name-text">MEHDI</h1>
          <div className="social-icons">
            <a href="https://facebook.com/cosmicleaderr" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a>
            <a href="https://instagram.com/cosmicleader" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a>
            <a href="https://twitter.com/mehdihasan22" target="_blank" rel="noreferrer"><i className="fa fa-twitter" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a>
          </div>

          <span className="intro-text">Hello, I'M <span className="highlighted-text">Mehdi Hassan A H</span></span>

          <h2 className="role-text">
            <Typed
              strings={["Flutter Developer", "React Developer", "Full Stack Engineer", "Node.js Dev"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h2>

          <span className="tagline">
            Knack of building applications with front and back end operations.
          </span>

          <div className="profile-buttons">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              Hire Me
            </button>
            <a href="MehdiHassanCV.pdf" download="Mehdi_Hassan_CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </motion.div>

        {/* Right section */}
        <motion.div
          className="profile-picture"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profilePhoto} alt="Mehdi Hassan" className="profile-image" />
        </motion.div>
      </div>
    </div>
  );
}