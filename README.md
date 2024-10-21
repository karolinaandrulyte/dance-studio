# Dance Studio Management System (frontend)

## Overview

This is the frontend for the Dance Studio management system, built using React. It is a web application designed to facilitate the management of dance studio operations. It provides a user-friendly interface for user registration, teacher profile management, student assignment to teachers and relevant information for students. This application supports multiple user roles, including Admin, Teacher, and Student.

## Features

- **User-Friendly Interface**: Built with React, providing an intuitive and responsive UI with modern design.
- **User Registration and Authentication**
- **Role-Based Access Control and Navigation**: Users are directed to different dashboards based on their roles (Student, Teacher, Admin).
- **Profile Management**: all users can view and teacher users can update their profiles easily.
- **RESTful API Integration**: Communicates with the backend using RESTful APIs for data management.
- **Student Assignment to Teachers**

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Spring Boot
- **Database**: MySQL
- **API**: RESTful API for data handling
- **Security**: JWT for authentication and authorization
- **Validation**: React Validation for form inputs

## Installation

To install and run the frontend of the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js (v14 or higher)**: Download and install Node.js from [Node.js official page](https://nodejs.org/).
- **npm (Node Package Manager)**: Comes bundled with Node.js, used for managing dependencies.

Clone the repository:
First, clone the repository to your local machine using Git:
```bash
   git clone https://github.com/karolinaandrulyte/dance-studio.git
   cd dance-studio-management
```

Navigate to the frontend directory and install the required dependencies:
```bash
   npm install
```

After installing the dependencies, you can start the application using:

```bash
   npm start
```

## Usage
Access the application at http://localhost:3000.

- **Sign Up**: Navigate to the signup page and fill in the required fields to create a new user account. You can choose to register as either a student or a teacher.

Example Request:
`{
  "username": "john_doe",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "password": "securePassword123",
  "isTeacher": true
}`

- **Login**: After signing up, users can log in to access their profiles. The application supports different roles, and users will be able to access respective dashboards based on their roles.

`{
  "username": "john_doe",
  "password": "securePassword123"
}`

- **Profiles**: 
  - **Students** and **Admins**: in their profile page they can see information, including username, first name, last name, email and role
  - **Teachers**: in their profile page they can see the same details as students, including seeing and updating their dance style and description.

- **Role-Based Board Access**: The application implements role-based access control, allowing different functionalities based on user roles:
  - **Students**: can access Student Board with the list of available teachers along with their dance style and description.
  - **Teachers**: can access Teacher Board with a list of student users and assign/unassign students to their custom students table.
  - **Admins**: can access Admin Board where they can view, update and delete users.

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
