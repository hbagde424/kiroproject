const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Role = require('../models/Role');

dotenv.config();

const roles = [
  {
    name: 'admin',
    permissions: ['create', 'read', 'update', 'delete', 'manage_users', 'manage_roles'],
    description: 'Full system access'
  },
  {
    name: 'manager',
    permissions: ['create', 'read', 'update', 'delete'],
    description: 'Can manage employees'
  },
  {
    name: 'employee',
    permissions: ['read'],
    description: 'Read-only access'
  }
];

const seedRoles = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    await Role.deleteMany();
    console.log('Roles cleared');

    await Role.insertMany(roles);
    console.log('Roles seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding roles:', error);
    process.exit(1);
  }
};

seedRoles();
