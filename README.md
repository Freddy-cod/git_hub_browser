
# GitHub Browser App
Full-stack app using React (frontend) and Express (backend) to browse GitHub users and repos via public API.

## Setup
- Backend: `cd backend && npm install && npm start`
- Frontend: `cd frontend && npm install && npm start`

## Running the app

- Backend(Express Server):`cd backend && npm run dev` 

 Runs on http://localhost:5000

- Frontend(react app): `cd frontend && npm start`

Runs on http://localhost:3000
## Features
- Search users
- View user profile + repos
- View repo details + last 5 commits

## Tech
- Backend: Express, Axios (for GitHub API), Helmet
- Frontend: React, React Router, Axios (for backend calls)

## Testing
- Run `npm test` in backend/frontend folders.

## API Endpoints (Backend)
- POST /api/users/search { query: string } → User search results
- GET /api/users/:username → User details + repos
- GET /api/repos/:owner/:repo → Repo details + commits
