import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app,server } from "./lib/socket.js"
import path from 'path'

dotenv.config()
const PORT = process.env.PORT
const __dirname = path.resolve();


// temporary solution for CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, OPTIONS", // Include PUT
    allowedHeaders: "Content-Type, Authorization",
    credentials: true, // Allow cookies to be sent
  })
);
app.use(express.json({ limit: "10mb" })); // Increase limit
app.use(express.urlencoded({ limit: "10mb", extended: true })); 

app.use(cookieParser())



app.use("/api/auth", authRoutes)
app.use("/api/messages",messageRoutes )

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


server.listen(PORT,(req,res)=>{
    console.log("Server is working")
    connectDB();
})
