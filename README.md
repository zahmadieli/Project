# Internship Finder Web Application

A web application to help college students find, save, and organize internship opportunities from one central place. Built using front-end and back-end web technologies, and connected to a real-time database with Supabase.

## Features

- Browse recommended internships
- Bookmark internships for later
- View resume and interview tips
- Learn about how the tool works and where the data comes from

## Live Demo

- Frontend (Vercel): [https://final-project-inst-377-cvqw.vercel.app/](https://final-project-inst-377-cvqw.vercel.app/)
- Backend (Render): [https://internship-backend-8az2.onrender.com](https://internship-backend-8az2.onrender.com)

## Target Browsers

- Chrome, Firefox, Safari
- iOS Safari

## Project Structure

finalProject_INST377/
├── frontend/
│ ├── index.html
│ ├── about.html
│ ├── internships.html
│ ├── style.css
│ └── script.js
├── backend/
│ ├── api/
│ │ ├── router.js
│ │ └── server.js
│ ├── db/
│ │ └── supabaseuser.js
│ ├── package.json
└── README.md

# Developer Manual

This section is for developers

## Installation

Clone this repository:

git clone https://github.com/zahmadieli/finalProject_INST377.git
cd finalProject_INST377

cd backend
npm install

## Run the Backend

npm start

## Running the Application Locally

## API Endpoints

### `GET /api/bookmarks`

Returns all saved bookmarks from the Supabase database.

**Response Example:**

```json
[
  {
    "id": 1,
    "title": "Backend Intern",
    "company": "Netflix"
  }
]

{
  "title": "Backend Intern",
  "company": "Netflix"
}
[
  {
    "id": 2,
    "title": "Backend Intern",
    "company": "Netflix"
  }
]





```
