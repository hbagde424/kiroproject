const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Role name is required'],
    unique: true,
    trim: true,
    enum: ['admin', 'manager', 'employee']
  },
  permissions: [{
    type: String,
    enum: ['create', 'read', 'update', 'delete', 'manage_users', 'manage_roles']
  }],
  description: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Role', roleSchema);
