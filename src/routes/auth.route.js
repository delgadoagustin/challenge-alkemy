import express from "express";
import { authController } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const authRoute = express.Router();

authRoute.post("/login",authMiddleware.checkLoggedIn,authController.login);
authRoute.post("/register",authMiddleware.checkLoggedIn,authController.register);

export { authRoute };