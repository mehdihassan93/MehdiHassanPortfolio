import React from "react";
import ScrollService from "../../../utilities/ScrollService";
// import Typical from "react-typical";
import"./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/cosmicleaderr/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/mehdihasan22">
                <i className="fa fa-twitter" />
              </a>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {""}Hello, I'M{" "}
                <span className="highlighted-text">Mehdi Hassan A H</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {/* <Typical
                    loop={Infinity}
                    steps={[ */}
                      "Flutter Developer",
                      {/* 1000,
                      "Full stack Developer",
                      1000,
                      "Python",
                      1000,
                      "Cross Platform Dev",
                      1000,
                      "React/React Native",
                      1000, */}
                    {/* ]} */}
                  {/* /> */}
                </h1>
              </span>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </div>

            <div className="profile-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
         
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
      </div>
    </div>
  );
}
