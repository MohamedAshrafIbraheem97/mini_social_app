import { Router } from "express";
import userController from "./user.controller.js";

const userRoutes = Router();
userRoutes.get("/", userController.getAll);
userRoutes.post("/signup", userController.createUser);
userRoutes.put("/:id", userController.createOrUpdateUser);
userRoutes.get("/by-email", userController.findByEmail);
userRoutes.get("/:id", userController.findByID);

export default userRoutes;
