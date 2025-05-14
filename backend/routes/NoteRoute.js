import express from "express";
import {
    getNotes, 
    createNotes,
    UpdateNotes,
    DeleteNotes
} from "../controllers/NoteController.js";
import { login, register, logout } from "../controllers/UserController.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.route('/note')
    .get(verifyToken, getNotes)
    .post(verifyToken, createNotes);

router.route('/note/:id')
    .get(verifyToken, getNotes)
    .patch(verifyToken, UpdateNotes)
    .delete(verifyToken, DeleteNotes);

router.post('/login', login);
router.post('/register', register);
router.get('/logout', verifyToken, logout);
router.get('/token', refreshToken);

export default router;
