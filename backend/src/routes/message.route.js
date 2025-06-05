import express from "express"
const router = express.Router();
import { signup, login , logout , updateProfile} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getMessages, getUsersForSidebar , sendMessage} from "../controllers/message.controller.js";



router.get("/user", protectRoute,getUsersForSidebar)
router.get("/:id", protectRoute,getMessages)
router.post("/send/:id", protectRoute,sendMessage)



export default router;
