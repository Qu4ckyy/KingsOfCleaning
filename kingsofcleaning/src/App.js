import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Houses from "./Offer/Houses/Houses";
import Offices from "./Offer/Offices/Offices";
import AfterRenovation from "./Offer/AfterRenovation/AfterRenovation";
import Windows from "./Offer/Windows/Windows";
import Garages from "./Offer/Garages/Garages";
import Outside from "./Offer/Outside/Outside";
import Furniture from "./Offer/Furniture/Furniture";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-3L9WGTJ5LZ";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-3L9WGTJ5LZ");
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/offices" element={<Offices />} />
        <Route path="/afterrenovation" element={<AfterRenovation />} />
        <Route path="/windows" element={<Windows />} />
        <Route path="/garages" element={<Garages />} />
        <Route path="/outside" element={<Outside />} />
        <Route path="/furniture" element={<Furniture />} />
      </Routes>
    </Router>
  );
}

export default App;
