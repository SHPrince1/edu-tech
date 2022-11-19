import { React, useState } from "react";
// import useState from 'react';
import logo from "./logo.svg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/index";
import UploadPage from "./pages/uploadpage";
import Slider from "./components/slider";

import "./App.css";
import StudentLogin from "./pages/student-login";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/uploadpage" element={<UploadPage />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
