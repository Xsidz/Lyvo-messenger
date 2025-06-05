import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app,server } from "./lib/socket.js"

dotenv.config()
const PORT = process.env.PORT
app


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


server.listen(PORT,(req,res)=>{
    console.log("Server is working")
    connectDB();
})
