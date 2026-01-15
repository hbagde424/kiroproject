import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getEmployee } from '../services/employeeService';
import './EmployeeDetail.css';

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const fetchEmployee = async () => {
    try {
      const data = await getEmployee(id);
      setEmployee(data.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch employee');
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!employee) return <div>Employee not found</div>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-header">
          <h2>Employee Details</h2>
          <Link to={`/employees/edit/${employee._id}`} className="btn-edit-detail">
            Edit
          </Link>
        </div>
        <div className="detail-grid">
          <div className="detail-item">
            <label>Employee ID</label>
            <p>{employee.employeeId}</p>
          </div>
          <div className="detail-item">
            <label>Status</label>
            <p>
              <span className={`status-badge ${employee.status}`}>
                {employee.status}
              </span>
            </p>
          </div>
          <div className="detail-item">
            <label>First Name</label>
            <p>{employee.firstName}</p>
          </div>
          <div className="detail-item">
            <label>Last Name</label>
            <p>{employee.lastName}</p>
          </div>
          <div className="detail-item">
            <label>Email</label>
            <p>{employee.email}</p>
          </div>
          <div className="detail-item">
            <label>Phone</label>
            <p>{employee.phone || 'N/A'}</p>
          </div>
          <div className="detail-item">
            <label>Department</label>
            <p>{employee.department}</p>
          </div>
          <div className="detail-item">
            <label>Position</label>
            <p>{employee.position}</p>
          </div>
          <div className="detail-item">
            <label>Salary</label>
            <p>${employee.salary.toLocaleString()}</p>
          </div>
          <div className="detail-item">
            <label>Date of Joining</label>
            <p>{new Date(employee.dateOfJoining).toLocaleDateString()}</p>
          </div>
        </div>
        <button onClick={() => navigate('/employees')} className="btn-back">
          Back to List
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetail;
