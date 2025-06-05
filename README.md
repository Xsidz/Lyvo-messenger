# 💬 Lyvo — Speak. Share. Stay Connected.

**Lyvo** is a real-time messaging app built with the MERN stack, featuring fast performance, simple UX, and modern styling. It supports user authentication, one-on-one chat, and live message syncing — all packed in a responsive and elegant UI.

---

## 📸 Preview

![Lyvo Chat UI Screenshot]
<img width="1663" alt="Screenshot 2025-06-05 a<img width="1663" alt="Screenshot 2025-06-05 at 6 02 54 PM" src="https://github.com/user-attachments/assets/58d60d15-c23e-4f98-977e-bff2bd241d42" />

<img width="1663" alt="Screenshot 2025-06-05 at 6 03 02 PM" src="https://github.com/user-attachments/assets/c2aa46d0-a8fe-491c-91b4-7ef362232008" />



https://github.com/user-attachments/assets/5b74a913-c6a8-4d00-a2b3-8499bc1e402e


---

## 🚀 Features

- 🔐 JWT-based User Authentication
- 💬 One-on-One Real-Time Messaging
- 📲 Responsive Design with TailwindCSS + DaisyUI
- ⚡ Fast Global State Management with Zustand
- 🌍 RESTful API with Express + MongoDB
- 🎯 Clean & Modular Architecture
- 🌐 Deployment Ready for Render/Vercel

---

## 🛠️ Tech Stack

**Frontend**  
- ⚛️ React.js (with Vite)  
- 🎨 TailwindCSS + DaisyUI  
- 🔧 Zustand (Global State Management)  
- 📡 Axios  

**Backend**  
- 🟢 Node.js + Express  
- 🍃 MongoDB + Mongoose  
- 🔐 JSON Web Tokens (JWT)  
- 🌱 dotenv for environment configs  

**Other Tools**  
- 🛠️ Render / Vercel / Netlify (for deployment)  
- 🔁 Nodemon (for dev backend auto-reload)  

---

## 📁 Project Structure

Lyvo/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── lib/db.js
│ │ └── index.js
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── store/ <-- Zustand Store
│ │ ├── context/
│ │ ├── App.jsx
│ │ └── main.jsx
├── .env
├── README.md


---

## ⚙️ Installation

### 🧱 Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas or local MongoDB
- npm or yarn

---

### 🔗 Clone and Setup

```bash
git clone https://github.com/your-username/lyvo.git
cd lyvo
```
## 🔧 Backend
```
cd backend
npm install
Create a .env in backend/ with:

env

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
Start the backend server:

```npm run dev```

💻 Frontend
```
cd frontend
npm install
npm run dev
```
## 🧪 Testing Flow
Register a new account

Login to your dashboard

Start a one-on-one chat with a friend

Messages sync instantly using real-time updates

## 🌐 Deployment
You can deploy:

Frontend on Vercel or Netlify

Backend on Render or any Node-compatible platform

Be sure to configure .env variables in your deployment settings.

🛡️ Security Best Practices
Never commit .env files

Use HTTPS in production

Store JWT secrets securely

Sanitize all input (even though it's a chat app)

## 🤝 Contributing
Pull requests are welcome!
Open an issue for major changes or improvements.
