import { Router } from "express";

import * as PostController from "./post.controller.js";

const postRoutes = Router();

postRoutes.post("/", PostController.createPost);
postRoutes.delete("/:postId", PostController.deletePost);
postRoutes.get("/details", PostController.getAllPostsDetails);
postRoutes.get("/comment-count", PostController.getAllPostsWithCommentCount);

export default postRoutes;
