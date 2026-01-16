📇 Contact List – Full Stack Project

A simple full-stack Contact List application built using React, Express, MongoDB, and Mongoose.
Users can add, view, edit, and delete contacts, with data stored persistently in MongoDB.

This project was built to understand frontend–backend connection, REST APIs, and state management.

✨ Features

Add new contacts (name & phone)

View all saved contacts

Edit existing contacts

Delete contacts

Persistent storage using MongoDB

Clean UI with reusable React components

🛠 Tech Stack
Frontend

React

JavaScript

CSS

Fetch API

Backend

Node.js

Express.js

MongoDB

Mongoose

📂 Project Structure
contact-list/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactList.jsx
│   │   └── App.jsx
│   └── package.json
│
├── Express/
│   ├── server.js
│   └── package.json
│
├── screenshots/
│
└── README.md

🚀 How to Run the Project Locally
1️⃣ Backend (Express + MongoDB)
cd Express
npm install
node server.js


Server runs on: http://localhost:3000

Make sure MongoDB is running

2️⃣ Frontend (React)
cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/contacts	Get all contacts
POST	/contacts	Add a new contact
PUT	/contacts/:id	Update a contact
DELETE	/contacts/:id	Delete a contact
🧠 Key Learnings

React state management with useState & useEffect

Reusing components (single form for add & edit)

REST API design

MongoDB CRUD operations with Mongoose

Frontend–backend data flow

Refactoring for cleaner code

📸 Screenshots

Screenshots of the application UI are available in the screenshots/ folder.

👩‍💻 Author

Varshak Payyannur
Beginner Full-Stack Developer
Learning MERN stack step by step 🌱