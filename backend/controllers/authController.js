const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// Register User
const register = async (req, res) => {
  try {
    const { name, email, password, roleName } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and password'
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    // Find role
    const role = await Role.findOne({ name: roleName || 'employee' });
    if (!role) {
      return res.status(400).json({
        success: false,
        message: `Role '${roleName || 'employee'}' not found`
      });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role: role._id
    });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: role.name,
        permissions: role.permissions
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Registration failed'
    });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    const user = await User.findOne({ email }).select('+password').populate('role');

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is inactive'
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role.name,
        permissions: user.role.permissions
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Login failed'
    });
  }
};

// Get Current User
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('role');
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error('GetMe error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to get user'
    });
  }
};

module.exports = { register, login, getMe };
