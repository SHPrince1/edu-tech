import { React, useState } from "react";
// import useState from 'react';
import logo from "./logo.svg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";
import Profile from "./pages/profile.js";
import "./App.css";
import Sidebar from "../src/components/sidebar";
import Navbar from "./components/topnav";

function App() {
  return (
    <div className="routeDiv">
      <Router>
        <Sidebar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
              {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
