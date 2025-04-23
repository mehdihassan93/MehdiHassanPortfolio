// src/services/AnimationService.js

export default class AnimationService {
  static animations = new AnimationService();

  fadeInScreen = (screen_name) => {
    let screen = document.getElementById(screen_name);
    if (!screen) return;

    screen.style.opacity = "1";
    screen.style.transform = "translateY(0px)";
    screen.style.transition = "all 0.8s ease-out";
  };
}