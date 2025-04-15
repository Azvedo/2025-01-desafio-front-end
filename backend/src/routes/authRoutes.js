import { signIn, signUp } from "../controller/authController.js";
import { Router } from "express";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;