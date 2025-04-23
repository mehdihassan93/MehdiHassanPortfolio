// src/screens/AboutMe/AboutMe.jsx

import React from "react";
import ScreenHeading from "../../components/Common/ScreenHeading/ScreenHeading";
import ScrollService from "../../services/ScrollService";
import "./AboutMe.css";

export default function AboutMe(props) {
  const SCREEN_CONSTANTS = {
    description:
      "Full stack web and mobile developer with background knowledge of MERN stacks with Redux, along with a knack of building applications with utmost efficiency. Strong professional with an MSc Web Development degree willing to be an asset for an organization.",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Interactive Front End as per the design",
        "React and React Native Developer",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />

        <div className="about-me-card">
          <div className="about-me-profile" />

          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>

            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a href="MehdiHassanCV.pdf" download="MehdiHassanCV.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}