import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import mongoose from "mongoose";
import { getReceiverSocketId } from "../lib/socket.js";
import {io} from "../lib/socket.js"


export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id; // Note: JS is case-sensitive. Should be `_id`, not `_Id`

    // Validate both IDs
    if (
      !mongoose.Types.ObjectId.isValid(myId) ||
      !mongoose.Types.ObjectId.isValid(userToChatId)
    ) {
      return res.status(400).json({ message: "Invalid user ID(s)" });
    }

    const messages = await Message.find({
      $or: [
        { senderId: myId, reciverId: userToChatId },
        { senderId: userToChatId, reciverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in the getMessages Controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const sendMessage = async (req,res)=>{
    try {
        const {text, image} = req.body
        const {id: reciverId} = req.params
        const senderId = req.user._id

        let imageUrl ;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url
        }
        const newMessage = new Message({
             senderId,
             reciverId,
             text,
             image : imageUrl
        })
       await  newMessage.save()
       const reciverSocketId = getReceiverSocketId(reciverId);
       if(reciverSocketId){
            io.to(reciverSocketId).emit("newMessage", newMessage);
       }

       //socketio realtime functionality

       res.status(201).json(newMessage)
    } catch (error) {
        console.log("Eror in the sendMessage Controller : ", error.message)
        res.status(500).json({message: "Internal Server  Error!!"})
    }
}