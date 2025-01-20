import { Router } from "express";
import { createCurrentUser } from "../controllers/user.controller";

const myUserRoute = Router();

// api/my/user
myUserRoute.post("/", createCurrentUser);

export default myUserRoute;
