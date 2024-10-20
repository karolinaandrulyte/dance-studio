# Dance Studio Management System

## Overview

The Dance Studio Management System is a web application designed to facilitate the management of dance studio operations, including user registration, trainer schedules, and student-teacher assignments. This application supports multiple user roles, including Admin, Teacher, and Student.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Available Scripts](#scripts)

## Features

- User Registration and Authentication
- Role-based Access Control (Admin, Teacher, Student)
- Teacher Profile Management
- Student Assignments to Teachers
- View Trainer Schedules
- Responsive UI with modern design

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Spring Boot
- **Database**: MySQL
- **API**: RESTful API for data handling
- **Security**: JWT for authentication and authorization
- **Validation**: React Validation for form inputs

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/karolinaandrulyte/dance-studio.git
   cd dance-studio-management

2. Set up the backend:
Navigate to the backend directory.
Install the required dependencies and build the project using Maven or Gradle.
Set up the MySQL database and update the application properties with the database credentials.

3. Set up the frontend:
Navigate to the frontend directory.
Install the required dependencies:
```bash
   npm install

4. Start the backend server:
```bash
   ./mvnw spring-boot:run

5. Start the frontend application:
```bash
   npm start

## Usage
Access the application at http://localhost:3000.

- **Sign Up**: Users can sign up by filling out the registration form with their username, email, first name, last name, and password. They can also choose to register as a Teacher.

- **Login**: After signing up, users can log in to access their profiles. The application supports different roles, and users will be directed to their respective dashboards based on their roles.

- **Profiles**: 
  - **Students**: Students can view their teachers along with their dance styles and schedules in the Student Board.
  - **Teachers**: Teachers can manage their profiles, including updating their dance styles and descriptions. They can also view the students assigned to them in their Teacher Board.

- **Role-Based Access**: The application implements role-based access control, allowing different functionalities based on user roles:
  - **Students**: Can view teacher schedules and profiles.
  - **Teachers**: Can manage their profiles and assign/unassign students.
  - **Admins**: Can manage all users and their roles.

- **Error Handling**: The application provides appropriate feedback for actions like successful registration, login failures, and other operations to enhance user experience.

## API Endpoints

| Method | Endpoint                                       | Description                                |
|--------|-----------------------------------------------|--------------------------------------------|
| GET    | `/api/auth/signup`                            | Register a new user.                      |
| POST   | `/api/auth/login`                             | Log in a user and return JWT token.      |
| GET    | `/api/users/students`                        | Fetch a list of all students (accessible by Admins and Teachers). |
| GET    | `/api/users/teachers`                        | Fetch a list of all teachers (accessible by Admins). |
| GET    | `/api/users/teachers/{teacherId}/students`  | Fetch students assigned to a specific teacher. |
| PUT    | `/api/users/students/{studentId}/assign/{teacherId}` | Assign a student to a teacher.          |
| PUT    | `/api/users/students/{studentId}/unassign`  | Unassign a student from a teacher.       |
| PUT    | `/api/users/profile/update`                   | Update a user's profile.                  |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.  
See the section about [running tests](https://create-react-app.dev/docs/running-tests/) for more information.

### `npm run eject`

**Note: This is a one-way operation.**  
If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

For more information, you can refer to the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).
