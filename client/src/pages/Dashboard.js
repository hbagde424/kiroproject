import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name}!</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Role</h3>
          <p>{user?.role}</p>
        </div>
        <div className="dashboard-card">
          <h3>Email</h3>
          <p>{user?.email}</p>
        </div>
        <div className="dashboard-card">
          <h3>Permissions</h3>
          <ul>
            {user?.permissions?.map((perm, index) => (
              <li key={index}>{perm}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
