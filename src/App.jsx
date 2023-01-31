import React from 'react';
import Register from './components/Register';
import Navbar from './scenes/Navbar';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Hero from './scenes/Hero';
import Slider from './scenes/Slider';
import Advertisement from './scenes/Advertisement';
import TopDestinations from './scenes/TopDestinations';
import Recommended from './scenes/Recommended';
import TopSearch from './scenes/TopSearch';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            {/* <Hero /> */}
            {/* <Slider /> */}
            {/* <Advertisement /> */}
            <TopDestinations />
            {/* <Recommended /> */}
            <TopSearch />
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
const AppComponent = styled.div`
    position: relative;
`