import React from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import DisplayUsers from './DisplayUsers';
import ApiDemo from './ApiDemo';
import './style.css';

const MainNavbar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              Task management
            </Link>
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/DisplayUsers" className="nav-link">View Tasks</Link>
            </li>

            <li className="nav-item">
              <Link to="/Registration" className="nav-link">ADD Task</Link>
            </li>

            <li className="nav-item">
              <Link to="/Apidemo" className="nav-link">API demo</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DisplayUsers" element={<DisplayUsers />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Apidemo" element={<ApiDemo />} />
      </Routes>

    </BrowserRouter>
  );
};

export default MainNavbar;