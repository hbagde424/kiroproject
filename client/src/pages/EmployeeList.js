import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAllEmployees, deleteEmployee } from '../services/employeeService';
import { AuthContext } from '../context/AuthContext';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { hasPermission } = useContext(AuthContext);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getAllEmployees();
      setEmployees(data.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch employees');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await deleteEmployee(id);
        fetchEmployees();
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to delete employee');
      }
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="employee-list-container">
      <div className="list-header">
        <h1>Employees</h1>
        {hasPermission('create') && (
          <Link to="/employees/new" className="btn-add">Add Employee</Link>
        )}
      </div>
      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.employeeId}</td>
                <td>{employee.firstName} {employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                <td>${employee.salary.toLocaleString()}</td>
                <td>
                  <span className={`status-badge ${employee.status}`}>
                    {employee.status}
                  </span>
                </td>
                <td className="actions">
                  <Link to={`/employees/${employee._id}`} className="btn-view">View</Link>
                  {hasPermission('update') && (
                    <Link to={`/employees/edit/${employee._id}`} className="btn-edit">Edit</Link>
                  )}
                  {hasPermission('delete') && (
                    <button onClick={() => handleDelete(employee._id)} className="btn-delete">
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
