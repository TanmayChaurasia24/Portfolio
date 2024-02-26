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

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar/>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
