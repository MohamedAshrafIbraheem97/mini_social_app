import { connectDB } from "./src/config/database.js";
import express from "express";
import userRoutes from "./src/modules/users/user.routes.js";
import Post from "./src/modules/posts/post.model.js";
import Comment from "./src/modules/comments/comment.model.js";
import User from "./src/modules/users/user.model.js";
import postRoutes from "./src/modules/posts/post.routes.js";
import commentRoutes from "./src/modules/comments/comment.routes.js";

const app = express();
app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);

connectDB();

export default app;
