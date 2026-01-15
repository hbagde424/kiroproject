import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeDetail from './pages/EmployeeDetail';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees"
              element={
                <PrivateRoute permission="read">
                  <EmployeeList />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees/new"
              element={
                <PrivateRoute permission="create">
                  <EmployeeForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees/edit/:id"
              element={
                <PrivateRoute permission="update">
                  <EmployeeForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/employees/:id"
              element={
                <PrivateRoute permission="read">
                  <EmployeeDetail />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
