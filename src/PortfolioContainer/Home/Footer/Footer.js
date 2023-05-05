import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
      {/* <input type="image" img src = {'../../../assets/Home/shape-bg.png'} alt="photo" /> */}
        <img
          src={require("../../../assets/Home/shape-bg.png").default}
          alt="you have problem with the image"
        />
      </div>
    </div>
  );
}
