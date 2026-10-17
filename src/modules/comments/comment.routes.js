import { Router } from "express";

import * as CommentController from "./comment.controller.js";

const commentRoutes = Router();

commentRoutes.post("/", CommentController.createBulkComments);
commentRoutes.patch("/:commentId", CommentController.updateComment);
commentRoutes.post("/findOrCreate", CommentController.findOrCreate);
commentRoutes.get("/search", CommentController.searchComments);
commentRoutes.get("/newest/:postId", CommentController.recentComments);
commentRoutes.get("/details/:id", CommentController.getCommentById);

export default commentRoutes;
