const express = require('express');
const {
  getAllRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole
} = require('../controllers/roleController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(protect);

// GET all roles and POST new role
router.get('/', authorize('read'), getAllRoles);
router.post('/', authorize('manage_roles'), createRole);

// GET, PUT, DELETE single role
router.get('/:id', authorize('read'), getRole);
router.put('/:id', authorize('manage_roles'), updateRole);
router.delete('/:id', authorize('manage_roles'), deleteRole);

module.exports = router;
