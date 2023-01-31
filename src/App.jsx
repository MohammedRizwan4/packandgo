import React from 'react';
import Register from './components/Register';
import Navbar from './scenes/Navbar';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Hero from './scenes/Hero';
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
const AppComponent = styled.div`
    position: relative;
`