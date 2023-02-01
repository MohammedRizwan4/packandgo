import React from "react";
import Advertisement from "./scenes/Advertisement";
import Footer from "./scenes/Footer";
import Hero from "./scenes/Hero";
import Navbar from "./scenes/Navbar";
import Recommended from "./scenes/Recommended";
import Slider from "./scenes/Slider";
import TopDestinations from "./scenes/TopDestinations";
import TopSearch from "./scenes/TopSearch";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Slider /> */}
      <Advertisement />
      <TopDestinations />
      {/* <Recommended /> */}
      <TopSearch />
      <Footer/>
    </div>
  );
};

export default Home;
