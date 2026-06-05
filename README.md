# AI Resume Analyzer

AI Resume Analyzer is a web application that helps job seekers evaluate their resumes against job descriptions using AI-powered analysis. The system extracts resume content, compares it with job requirements, identifies skill gaps, and provides actionable recommendations to improve ATS compatibility and interview readiness.

## Features

* Resume Upload (PDF, DOC, DOCX)
* AI-Powered Resume Analysis
* ATS Match Score
* Matching Skills Detection
* Missing Skills Identification
* Resume Strengths & Weaknesses Analysis
* Improvement Suggestions
* Interview Question Generation
* User Authentication
* Analysis History Storage

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios
* Lucide React

### Backend

* Node.js
* Express.js
* Firebase Firestore
* Multer
* PDF Parse
* Mammoth
* Google Gemini API

## Project Structure

```bash
ai-resume-analyzer/
│
├── app/
├── components/
├── public/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── package.json
├── next.config.js
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ai-resume-analyzer.git
cd ai-resume-analyzer
```

## Frontend Setup

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

CLIENT_ORIGIN=http://localhost:3000

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_CLIENT_EMAIL=YOUR_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY="YOUR_PRIVATE_KEY"
```

Run backend:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Resume

```http
POST /api/resume/upload
POST /api/resume/analyze
GET  /api/resume/history
```

### Status

```http
GET /api/status
```

## Deployment

### Frontend (Vercel)

Environment Variables:

```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
```

Deploy:

```bash
vercel --prod
```

### Backend (Render)

Environment Variables:

```env
PORT=5000
CLIENT_ORIGIN=https://your-frontend.vercel.app

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_CLIENT_EMAIL=YOUR_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY="YOUR_PRIVATE_KEY"
```

Start Command:

```bash
node server.js
```

## Sample Analysis Output

```json
{
  "matchScore": 88,
  "matchingSkills": [
    "Windows Administration",
    "Network Troubleshooting"
  ],
  "missingSkills": [
    "AWS",
    "PowerShell"
  ],
  "strengths": [
    "Strong technical troubleshooting skills"
  ],
  "weaknesses": [
    "Limited cloud experience"
  ],
  "improvements": [
    "Add cloud certifications"
  ],
  "interviewQuestions": [
    "Describe a network issue you resolved."
  ]
}
```

## Future Enhancements

* Resume Builder
* Multiple Resume Templates
* Cover Letter Generator
* Job Recommendation System
* AI Career Guidance
* PDF Report Download

## Author

Arun Kumar

## License

This project is developed for educational and portfolio purposes.
