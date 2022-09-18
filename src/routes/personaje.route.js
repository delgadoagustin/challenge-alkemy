import express from "express"
import { personajeController } from "../controllers/personaje.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const personajeRoute = express.Router();

personajeRoute.get("/",/*authMiddleware.checkAuthenticatedJWT,*/personajeController.listCharacters);
personajeRoute.post("/",/*authMiddleware.checkAuthenticatedJWT,*/personajeController.addCharacter);

export { personajeRoute }