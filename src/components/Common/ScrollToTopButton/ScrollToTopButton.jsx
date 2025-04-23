// File: src/components/Common/ScrollToTopButton/ScrollToTopButton.jsx
import React from 'react';
import './ScrollToTopButton.css';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      ↑
    </button>
  );
}