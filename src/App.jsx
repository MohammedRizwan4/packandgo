import React from "react";
import Register from "./components/Register";
import Navbar from "./scenes/Navbar";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Hero from "./scenes/Hero";
import Slider from "./scenes/Slider";
import Advertisement from "./scenes/Advertisement";
import TopDestinations from "./scenes/TopDestinations";
import Recommended from "./scenes/Recommended";
import TopSearch from "./scenes/TopSearch";
import Home from "./Home";
import Theme from "./scenes/Theme";
import ContactUs from "./scenes/ContactUs";
import AboutUs from "./scenes/AboutUs";
import Theme1 from "./scenes/Theme1";
import Theme2 from "./scenes/Theme2";
import Theme3 from "./scenes/Theme3";
import Theme4 from "./scenes/Theme4";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/theme1" element={<Theme1 />} />
        <Route path="/theme2" element={<Theme2 />} />
        <Route path="/theme3" element={<Theme3 />} />
        <Route path="/theme4" element={<Theme4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
const AppComponent = styled.div`
  position: relative;
`;
