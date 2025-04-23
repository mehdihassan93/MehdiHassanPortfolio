// src/screens/Home/Header.jsx

// Header.jsx
import React, { useState, useEffect } from "react";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../utilities/commonUtils";
import ScrollService from "../../services/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
  
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  
    setSelectedScreen(screenIndex); // ✅ Update selected tab on scroll too
  };

  useEffect(() => {
    const subscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);
    return () => subscription.unsubscribe();
  }, []);

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={
          selectedScreen === i
            ? "header-option selected-header-option"
            : "header-option"
        }
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-logo">MEHDI</div>

        <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>

        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}