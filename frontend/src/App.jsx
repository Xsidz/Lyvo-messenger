import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route,Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/Loginpage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx"
import { useAuthStore } from "./store/useAuthStore.js";
import {Loader} from "lucide-react"
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore.js";

const App = () => {
  const { authUser, checkAuth,isCheckingAuth , onlineUsers,connectSocket,disconnectSocket} = useAuthStore();
  const {theme} = useThemeStore();

  console.log("Online Users",onlineUsers)
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

    useEffect(() => {
    // Only attempt to connect/disconnect socket after the initial auth check is complete
    if (!isCheckingAuth) {
      if (authUser) {
        connectSocket();
      } else {
        disconnectSocket();
      }
    }
  }, [authUser, isCheckingAuth, connectSocket, disconnectSocket]);

  console.log(authUser);

  if(isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className ="size-10 animate-spin"/>
    </div>
  )

  return (
    <>
      <div data-theme = {theme}>
        <Navbar />
       <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
      <Toaster/>
    </>
  );
};

export default App;
