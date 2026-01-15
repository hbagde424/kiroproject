const express = require('express');
const {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

// GET all employees and POST new employee
router.get('/', authorize('read'), getAllEmployees);
router.post('/', authorize('create'), createEmployee);

// GET, PUT, DELETE single employee
router.get('/:id', authorize('read'), getEmployee);
router.put('/:id', authorize('update'), updateEmployee);
router.delete('/:id', authorize('delete'), deleteEmployee);

module.exports = router;
