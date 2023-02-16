import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./scenes/Themes/Theme";
import Theme1 from "./scenes/Themes/Theme1";
import Theme2 from "./scenes/Themes/Theme2";
import Theme3 from "./scenes/Themes/Theme3";
import Theme4 from "./scenes/Themes/Theme4";
import Public from './scenes/routes/Public'
import Private from './scenes/routes/Private'
import AdminLogin from './components/admin/AdminLogin'
import Dashboard from './scenes/admin/Dashboard'
import Home from "./Home";
import ContactUs from "./scenes/pages/ContactUs";
import AboutUs from "./scenes/pages/AboutUs";
import CreateTheme from "./scenes/admin/adminTheme/CreateTheme";
import AddPackage from "./scenes/admin/AddPackage";
import Package from "./scenes/home/Package";
import AdminTheme from "./scenes/admin/adminTheme/AdminTheme";
import EditTheme from "./scenes/admin/adminTheme/EditTheme/EditTheme";
import AdminUsers from "./scenes/admin/adminUsers/AdminUsers";
import AdminAddUsers from "./scenes/admin/adminUsers/AddUsers/AdminAddUsers";
import AdminEditUsers from "./scenes/admin/adminUsers/EditUsers/AdminEditUsers";
import jwtDecode from "jwt-decode";

const App = () => {

    useEffect(() => {
        if (localStorage.getItem("admin-token")) {
            const token = localStorage.getItem("admin-token");
            const decodeToken = jwtDecode(token);
            console.log(decodeToken);
        }
        if (localStorage.getItem("login-token")) {
            const token = localStorage.getItem("login-token");
            const decodeToken = jwtDecode(token);
            console.log(decodeToken);
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth">
                    <Route path="admin-login" element={<Public><AdminLogin /></Public>} />
                </Route>
                <Route path="dashboard">
                    <Route path="users" element={<Private><AdminUsers /></Private>} ></Route>
                    <Route path="updateuser/:id" element={<Private><AdminEditUsers /></Private>} ></Route>
                    <Route path="add-users" element={<Private><AdminAddUsers /></Private>} ></Route>
                    <Route path="update/:id" element={<Private><EditTheme /></Private>} ></Route>
                    <Route path="packages" element={<Private><Dashboard /></Private>} />
                    <Route path="addpackage" element={<Private><AddPackage /></Private>} />
                    <Route path="theme" element={<Private><AdminTheme /></Private>} />
                    <Route path="create-theme" element={<Private><CreateTheme /></Private>} />
                    <Route path="*" element={<Private><AddPackage /></Private>} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/theme" element={<Theme />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/theme1" element={<Theme1 />} />
                <Route path="/theme2" element={<Theme2 />} />
                <Route path="/theme3" element={<Theme3 />} />
                <Route path="/theme4" element={<Theme4 />} />
                <Route path="/id" element={<Package />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
const AppComponent = styled.div`
  position: relative;
`;
