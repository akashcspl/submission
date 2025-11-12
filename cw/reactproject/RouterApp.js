import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Home from './MyHome';
import Contact from './MyContact';
import About from './MyAbout';
import NotFound from './MyNotFound';
import MyLogOut from './MyLogOut';
import { logout } from "./AuthSlice";

export default function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      {!isLoggedIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Router>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/loggedout">Logout</Link>
          
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/loggedout" element={<MyLogOut />} />         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
        </>
      )}
    </nav>
  );
}
