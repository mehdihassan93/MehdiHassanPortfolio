// src/screens/Home/Home.jsx

import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
    </div>
  );
}