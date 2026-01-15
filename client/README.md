# Employee Management System - Frontend

React frontend for the Employee Management System with authentication and role-based access control.

## Features

- User authentication (Login/Register)
- Role-based UI rendering
- Employee CRUD operations
- Responsive design
- Protected routes with permission checks

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will run on http://localhost:3000

## Available Routes

- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - User dashboard (protected)
- `/employees` - Employee list (protected, requires 'read' permission)
- `/employees/new` - Add new employee (protected, requires 'create' permission)
- `/employees/:id` - View employee details (protected, requires 'read' permission)
- `/employees/edit/:id` - Edit employee (protected, requires 'update' permission)

## Role Permissions

- **Admin**: Full access (create, read, update, delete, manage_users, manage_roles)
- **Manager**: Can manage employees (create, read, update, delete)
- **Employee**: Read-only access (read)
