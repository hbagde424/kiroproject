import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Employee Management System</h1>
        <p>Manage your workforce efficiently with role-based access control</p>
        <div className="home-buttons">
          <Link to="/login" className="btn-home btn-login">Login</Link>
          <Link to="/register" className="btn-home btn-register">Register</Link>
        </div>
        <div className="features">
          <div className="feature">
            <h3>🔐 Secure Authentication</h3>
            <p>JWT-based authentication with role management</p>
          </div>
          <div className="feature">
            <h3>👥 Employee Management</h3>
            <p>Complete CRUD operations for employee records</p>
          </div>
          <div className="feature">
            <h3>🎯 Role-Based Access</h3>
            <p>Admin, Manager, and Employee roles with permissions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
