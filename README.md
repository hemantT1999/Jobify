# Jobify

<div id="top"></div>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<div align="center">
<br>
<a href="https://github.com/hemantT1999/jobify">
    <img src="./client/src/assets/images/logo.svg" alt="Logo" height="50" >
</a>
<br>
<br>

<p align="center">
    <a href="https://github.com/hemantT1999/jobify/issues">Report Bug</a>
</p>
</div>

## About The Project

Jobify is a MERN Stack Application for tracking Job Search Process with AI-powered interview features.

![Preview](./client/src/assets/images/preview.PNG)

### Features

- User Authentication (Login/Register)
- Profile Management
- Job Management (Add/Edit/Delete)
- AI-powered Interview System
- Advanced Search & Filtering
- Interactive Dashboard with Statistics
- Monthly Application Tracking
- Responsive Design

### Built With

- Frontend:
  - React
  - React Router
  - Styled Components
  - Context API
  - Recharts
- Backend:
  - Node.js
  - Express
  - MongoDB
  - JWT Authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas Account
- npm or yarn

### Installation

1. Clone the repository

```sh
git clone https://github.com/hemantT1999/jobify.git
cd jobify
```

2. Install Dependencies

```sh
npm run install
```

3. Environment Setup
   Create a `.env` file in the server directory:

```env
PORT=5000
MONGO_URL=your_mongodb_url
JWT_LIFETIME=1d
JWT_SECRET=your_secret_key
```

4. Start Development Server

```sh
npm start
```

### API Endpoints

Base URL: `http://localhost:5000/api/v1`

#### Auth Routes

- `POST /auth/register` - Register User
- `POST /auth/login` - Login User
- `PATCH /auth/updateUser` - Update User

#### Job Routes

- `GET /jobs` - Get All Jobs
- `POST /jobs` - Create Job
- `PATCH /jobs/:id` - Update Job
- `DELETE /jobs/:id` - Delete Job
- `GET /jobs/stats` - Get Statistics

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Hemant Tandan - [GitHub Profile](https://github.com/hemantT1999)

Project Link: [https://github.com/hemantT1999/jobify](https://github.com/hemantT1999/jobify)

<p align="right">(<a href="#top">back to top</a>)</p>
