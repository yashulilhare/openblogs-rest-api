import { Router } from "express";
import controller from "./../controllers/postsController.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const postsRouter = Router();

postsRouter.get("/", authMiddleware, controller.getAllPosts);
postsRouter.get("/postid", authMiddleware, controller.getPost);
postsRouter.put("/postid", authMiddleware, controller.createPost);
postsRouter.delete("/postid", authMiddleware, controller.deletePost);
postsRouter.patch("/postid", authMiddleware, controller.updatePost);



export default postsRouter;
