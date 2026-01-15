const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      family: 4 // Use IPv4, skip trying IPv6
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.error('\nPlease make sure MongoDB is running:');
    console.error('- Windows: Run "net start MongoDB" or start MongoDB service');
    console.error('- Or install MongoDB from: https://www.mongodb.com/try/download/community');
    process.exit(1);
  }
};

module.exports = connectDB;
