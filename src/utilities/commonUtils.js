// src/utilities/commonUtils.js

import Home from "../screens/Home/Home";
import AboutMe from "../screens/AboutMe/AboutMe";
import Resume from "../screens/Resume/Resume";
import Game from "../screens/Game/Game";

import Contact from "../screens/Contact/Contact";

export const TOTAL_SCREENS = [
  { screen_name: "Home", component: Home },
  { screen_name: "AboutMe", component: AboutMe },
  { screen_name: "Resume", component: Resume },
  { screen_name: "Game", component: Game },
  { screen_name: "ContactMe", component: Contact },  // <- updated here
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};