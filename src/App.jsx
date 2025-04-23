// src/App.jsx

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PortfolioContainer from "./screens/PortfolioContainer/PortfolioContainer";
import ScrollToTopButton from "./components/Common/ScrollToTopButton/ScrollToTopButton";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      <ToastContainer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;