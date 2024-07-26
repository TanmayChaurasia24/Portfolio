import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'; // Corrected import statement
import Services from './components/Services';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './components/Admin';
import Failed from './components/Failed';
import Success from './components/Success';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar/>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/failed" element={<Failed />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
