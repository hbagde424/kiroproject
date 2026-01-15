const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Hash password before saving - Fixed version
userSchema.pre('save', function(next) {
  const user = this;
  
  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // Hash password with cost of 10
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) return next(err);
    
    // Override the cleartext password with the hashed one
    user.password = hash;
    next();
  });
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);