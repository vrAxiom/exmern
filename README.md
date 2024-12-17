# Job Manager - Modern Job Application Platform

A full-stack web application built with React, Node.js and MongoDB for managing job postings and applications with automated resume parsing.

## Features

- 🎯 Modern and intuitive UI/UX design
- 📝 Job posting management for admins
- 📄 Resume upload and parsing
- 🔒 Secure authentication and authorization
- 📱 Responsive design for all devices
- 🚀 Easy deployment on Vercel

## Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router v6
- React Query
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Resume Parser
- File Upload

## Prerequisites

- Node.js 16.x or later
- MongoDB Atlas account
- Git

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/job-manager.git
cd job-manager
```

### Environment Variables

Create `.env` files in both frontend and backend directories:

Frontend (.env):
```env
VITE_API_URL=http://localhost:5000
```

Backend (.env):
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Initialize Database

The application includes an auto-initialization script that creates required collections and indexes if they don't exist:

```bash
cd backend
npm run init-db
```

### Run Development Servers

```bash
# Start backend server
cd backend
npm run dev

# Start frontend development server
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Deployment

### Backend Deployment

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set up environment variables in Vercel dashboard
4. Deploy using the following settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Frontend Deployment

1. Update the API URL in frontend environment variables
2. Push changes to GitHub
3. Deploy using Vercel's automatic GitHub integration

## Project Structure

```
job-manager/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── server.js
│
└── README.md
```

## Features in Detail

### Admin Panel
- Create and manage job descriptions
- Set visibility and expiration dates for job posts
- View and manage applications
- Download resumes

### Candidate Portal
- View active job postings
- Apply with form submission
- Upload resume (PDF/DOC/DOCX)
- Auto-fill form using resume parser
- Track application status

### Security Features
- JWT based authentication
- Input validation
- File upload restrictions
- Rate limiting
- XSS protection
- CORS configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@jobmanager.com or open an issue in the GitHub repository.
