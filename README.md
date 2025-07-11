## Overview

Markd is a content platform that enables users to share their expertise through beautifully crafted articles. Built with modern web technologies, it offers a seamless writing and reading experience with features like real-time article updates, user authentication, and social interactions.

## Key Features

- **Secure Authentication System**
  - JWT-based authentication
  - Protected routes
  - Secure password hashing
  - Session management

- **Article Management**
  - Create/Edit/Delete articles
  - Upvoting system
  - Search functionality based on titles (Will be updated to include tags and content)

- **User Features**
  - Custom profiles
  - Article portfolios
  - Bio management

- **Modern UI/UX**
  - Responsive design
  - Intuitive navigation
  - Loading states

## Tech Stack

### Frontend

- [React](https://reactjs.org/) - UI library
- [React Router](https://reactrouter.com/) - Navigation
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool

### Backend

- [Node.js](https://nodejs.org/) - Runtime environment
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [JWT](https://jwt.io/) - Authentication
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Password hashing

## Prerequisites

```json
{
  "node": ">=14.x",
  "npm": ">=6.x",
  "mongodb": ">=4.x"
}
