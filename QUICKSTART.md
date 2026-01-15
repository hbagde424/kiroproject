# Quick Start Guide

## Step-by-Step Setup

### 1. Install Dependencies

From the root directory, run:
```bash
npm run install-all
```

Or install separately:
```bash
# Backend
cd backend
npm install

# Frontend
cd client
npm install
```

### 2. Setup MongoDB

Make sure MongoDB is running on your system:
```bash
# Windows (if MongoDB is installed as a service)
net start MongoDB

# Or run mongod manually
mongod
```

### 3. Configure Backend

Edit `backend/.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_management
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
```

### 4. Seed Database

From root directory:
```bash
npm run seed
```

Or from backend directory:
```bash
cd backend
npm run seed
```

This creates three default roles:
- Admin (full access)
- Manager (employee management)
- Employee (read-only)

### 5. Start Backend Server

Open a terminal and run:
```bash
cd backend
npm run dev
```

Backend will start on http://localhost:5000

### 6. Start Frontend

Open another terminal and run:
```bash
cd client
npm start
```

Frontend will start on http://localhost:3000

### 7. Test the Application

1. Go to http://localhost:3000
2. Click "Register" and create a new account
3. Select a role (admin, manager, or employee)
4. Login with your credentials
5. Start managing employees!

## Test Credentials

After registration, you can create test users:

**Admin User:**
- Email: admin@example.com
- Password: admin123
- Role: admin

**Manager User:**
- Email: manager@example.com
- Password: manager123
- Role: manager

**Employee User:**
- Email: employee@example.com
- Password: employee123
- Role: employee

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check the connection string in `.env`
- Verify MongoDB is accessible on port 27017

### Port Already in Use
- Backend: Change PORT in `backend/.env`
- Frontend: It will prompt you to use a different port

### CORS Errors
- Make sure backend is running on port 5000
- Check that CORS is enabled in `backend/server.js`

### Token Errors
- Clear browser localStorage
- Re-login to get a new token

## Next Steps

- Create employees from the dashboard
- Test different role permissions
- Explore the API endpoints
- Customize the UI and add more features
