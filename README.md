# 💬 Lyvo — Speak. Share. Stay Connected.

**Lyvo** is a modern, real-time messaging application built with the MERN stack, featuring lightning-fast performance, intuitive user experience, and beautiful design. Experience seamless one-on-one conversations with live message synchronization, image sharing, and customizable themes.

---

## 📸 Preview

### 🏠 Home Dashboard
<img width="1663" alt="Screenshot 2025-06-05 at 6 02 54 PM" src="https://github.com/user-attachments/assets/58d60d15-c23e-4f98-977e-bff2bd241d42" />

### 💬 Chat Interface
<img width="1663" alt="Screenshot 2025-06-05 at 6 03 02 PM" src="https://github.com/user-attachments/assets/c2aa46d0-a8fe-491c-91b4-7ef362232008" />

### 🎥 Live Demo
https://github.com/user-attachments/assets/5b74a913-c6a8-4d00-a2b3-8499bc1e402e

---

## ✨ Features

### 🔐 **Authentication & Security**
- **JWT-based Authentication** - Secure user sessions with JSON Web Tokens
- **User Registration & Login** - Complete signup and login flow
- **Profile Management** - Update profile information and avatar
- **Password Security** - Bcrypt hashing for secure password storage
- **Protected Routes** - Route protection with authentication middleware

### 💬 **Real-Time Messaging**
- **Instant Messaging** - One-on-one real-time conversations
- **Live Message Sync** - Messages appear instantly using Socket.IO
- **Online Status** - See who's online in real-time
- **Message History** - Persistent message storage and retrieval
- **Typing Indicators** - Real-time typing status (coming soon)

### 🖼️ **Media Sharing**
- **Image Sharing** - Send and receive images in conversations
- **Image Preview** - Preview images before sending
- **Cloudinary Integration** - Secure cloud-based image storage
- **File Validation** - Image type validation and error handling

### 🎨 **Customization**
- **34 Beautiful Themes** - Choose from a wide variety of themes including:
  - Light & Dark modes
  - Colorful themes (Cupcake, Bumblebee, Emerald)
  - Modern themes (Synthwave, Cyberpunk, Dracula)
  - Seasonal themes (Halloween, Valentine, Winter)
  - Professional themes (Corporate, Business, Luxury)
- **Theme Preview** - Live preview of themes before applying
- **Persistent Settings** - Theme preferences saved locally

### 📱 **User Experience**
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Built with TailwindCSS and DaisyUI components
- **Loading States** - Skeleton loaders and smooth transitions
- **Toast Notifications** - User-friendly success and error messages
- **Clean Interface** - Intuitive and clutter-free design

### 🏗️ **Architecture**
- **Modular Structure** - Clean separation of concerns
- **State Management** - Zustand for efficient global state
- **Component-Based** - Reusable React components
- **RESTful API** - Well-structured backend API
- **Database Integration** - MongoDB with Mongoose ODM

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React.js 19** - Modern React with latest features
- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎨 **TailwindCSS 4** - Utility-first CSS framework
- 🎭 **DaisyUI** - Beautiful component library
- 🔧 **Zustand** - Lightweight state management
- 📡 **Axios** - HTTP client for API requests
- 🔌 **Socket.IO Client** - Real-time communication
- 🍞 **React Hot Toast** - Toast notifications
- 🧭 **React Router DOM** - Client-side routing
- 🎯 **Lucide React** - Beautiful icons

### **Backend**
- 🟢 **Node.js** - JavaScript runtime
- 🚀 **Express.js 5** - Web application framework
- 🍃 **MongoDB** - NoSQL database
- 📊 **Mongoose** - MongoDB object modeling
- 🔐 **JWT** - JSON Web Tokens for authentication
- 🔒 **Bcryptjs** - Password hashing
- ☁️ **Cloudinary** - Cloud-based image storage
- 🔌 **Socket.IO** - Real-time bidirectional communication
- 🍪 **Cookie Parser** - Cookie parsing middleware
- 🌐 **CORS** - Cross-origin resource sharing

### **Development & Deployment**
- 🐳 **Docker** - Containerization
- 🚀 **Docker Compose** - Multi-container orchestration
- 🌐 **Nginx** - Web server and reverse proxy
- 🔄 **Nodemon** - Development auto-reload
- 📦 **npm** - Package management
- 🎯 **ESLint** - Code linting and formatting

---

## ⚙️ Installation & Setup

### 🧱 Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB Atlas** account or local MongoDB installation
- **npm** or **yarn** package manager
- **Git** for version control

---

### 🔗 Clone and Setup

```bash
# Clone the repository
git clone https://github.com/your-username/lyvo-messenger.git
cd lyvo-messenger
```

### 🔧 Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
touch .env
```

**Configure your `.env` file in the backend directory:**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

**Start the backend server:**

```bash
npm run dev
```

The backend will be running on `http://localhost:5000`

### 💻 Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be running on `http://localhost:5173`

---

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# From the project root directory
docker-compose up --build
```

This will start both frontend and backend services:
- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:5001`

### Individual Docker Builds

```bash
# Build backend
docker build -f Dockerfile.backend -t lyvo-backend .

# Build frontend
docker build -f Dockerfile.frontend -t lyvo-frontend .
```

---

## 🧪 Testing the Application

### 1. **User Registration**
- Navigate to the signup page
- Create a new account with email and password
- Verify successful registration

### 2. **User Login**
- Login with your credentials
- Verify successful authentication

### 3. **Start Messaging**
- Select a user from the sidebar to start a conversation
- Send text messages and images
- Verify real-time message delivery

### 4. **Theme Customization**
- Go to Settings page
- Try different themes
- Verify theme persistence

### 5. **Profile Management**
- Update your profile information
- Change your avatar
- Verify changes are saved

---

## 🌐 Production Deployment

### **Frontend Deployment (Vercel/Netlify)**

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   npx vercel --prod
   ```

3. **Deploy to Netlify:**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### **Backend Deployment (Render/Railway)**

1. **Environment Variables:**
   - Set all required environment variables in your deployment platform
   - Ensure MongoDB connection string is production-ready

2. **Deploy to Render:**
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`

### **Full-Stack Deployment**

For a complete deployment, ensure:
- ✅ Environment variables are properly configured
- ✅ CORS settings allow your frontend domain
- ✅ MongoDB Atlas is accessible from your deployment
- ✅ Cloudinary credentials are set up
- ✅ HTTPS is enabled in production

---

## 🏗️ Project Structure

```
lyvo-messenger/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── lib/            # Utility libraries
│   │   ├── middlewares/    # Custom middlewares
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── index.js        # Server entry point
│   ├── package.json
│   └── Dockerfile.backend
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── constants/      # App constants
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand stores
│   │   └── main.jsx       # App entry point
│   ├── public/            # Static assets
│   ├── package.json
│   └── Dockerfile.frontend
├── docker-compose.yml
└── README.md
```

---

## 🔧 API Endpoints

### **Authentication**
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### **Messages**
- `GET /api/messages/user` - Get all users
- `GET /api/messages/:userId` - Get messages with specific user
- `POST /api/messages/send/:userId` - Send message to user

### **WebSocket Events**
- `connection` - User connects to chat
- `getOnlineUsers` - Get list of online users
- `newMessage` - Receive new message in real-time
- `disconnect` - User disconnects from chat

---

## 🛡️ Security Features

- ✅ **JWT Authentication** - Secure token-based authentication
- ✅ **Password Hashing** - Bcrypt for secure password storage
- ✅ **Input Validation** - Server-side validation for all inputs
- ✅ **CORS Protection** - Configured cross-origin resource sharing
- ✅ **Environment Variables** - Sensitive data stored securely
- ✅ **HTTPS Ready** - Production-ready security configuration

---

## 🎨 Available Themes

Lyvo comes with 34 beautiful themes to choose from:

| Category | Themes |
|----------|--------|
| **Basic** | Light, Dark, Black |
| **Colorful** | Cupcake, Bumblebee, Emerald, Aqua, Pastel |
| **Modern** | Synthwave, Cyberpunk, Dracula, Luxury |
| **Professional** | Corporate, Business, Wireframe |
| **Seasonal** | Halloween, Valentine, Winter, Autumn |
| **Nature** | Garden, Forest, Sunset |
| **Vintage** | Retro, Lofi, Coffee |
| **Special** | Fantasy, Acid, Lemonade, Nord |

---

## 🤝 Contributing

We welcome contributions to Lyvo! Here's how you can help:

### **Getting Started**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass
- Be respectful and constructive in discussions

### **Feature Requests**
- Open an issue with the "enhancement" label
- Describe the feature in detail
- Explain why it would be useful
- Consider contributing the feature yourself!

---

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Siddhesh Kabra**
- GitHub: [@siddheshkabra](https://github.com/siddheshkabra)
- Email: [your-email@example.com]

---

## 🙏 Acknowledgments

- **DaisyUI** - For the beautiful component library
- **TailwindCSS** - For the utility-first CSS framework
- **Socket.IO** - For real-time communication capabilities
- **Cloudinary** - For reliable image storage and management
- **MongoDB** - For the flexible database solution
- **React Community** - For the amazing ecosystem and tools

---

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Issues** - Look through existing issues first
2. **Create an Issue** - Describe your problem in detail
3. **Join Discussions** - Participate in community discussions
4. **Contact** - Reach out to the maintainers

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Siddhesh Kabra](https://github.com/siddheshkabra)

</div>