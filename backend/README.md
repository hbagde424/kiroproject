# Employee Management System - Backend

MERN stack backend with MVC pattern, authentication, roles, and permissions.

## Features

- User authentication (register/login) with JWT
- Role-based access control (Admin, Manager, Employee)
- Permission-based authorization
- Employee CRUD operations
- Role management
- MongoDB database

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_management
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
```

3. Seed roles:
```bash
npm run seed
```

4. Start server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user (protected)

### Employees
- GET `/api/employees` - Get all employees (protected, requires 'read' permission)
- GET `/api/employees/:id` - Get single employee (protected, requires 'read' permission)
- POST `/api/employees` - Create employee (protected, requires 'create' permission)
- PUT `/api/employees/:id` - Update employee (protected, requires 'update' permission)
- DELETE `/api/employees/:id` - Delete employee (protected, requires 'delete' permission)

### Roles
- GET `/api/roles` - Get all roles (protected, requires 'read' permission)
- GET `/api/roles/:id` - Get single role (protected, requires 'read' permission)
- POST `/api/roles` - Create role (protected, requires 'manage_roles' permission)
- PUT `/api/roles/:id` - Update role (protected, requires 'manage_roles' permission)
- DELETE `/api/roles/:id` - Delete role (protected, requires 'manage_roles' permission)

## Default Roles

- **Admin**: Full access (create, read, update, delete, manage_users, manage_roles)
- **Manager**: Can manage employees (create, read, update, delete)
- **Employee**: Read-only access (read)

## Usage Example

1. Register a user:
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "roleName": "admin"
}
```

2. Login:
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

3. Use the returned token in Authorization header:
```
Authorization: Bearer <your_token>
```

4. Create an employee:
```json
POST /api/employees
{
  "employeeId": "EMP001",
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "1234567890",
  "department": "IT",
  "position": "Developer",
  "salary": 50000
}
```
