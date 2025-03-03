import express from "express";
import {
    getNotes, 
    createNotes,
    UpdateNotes,
    DeleteNotes
} from "../controllers/NoteController.js";

const router = express.Router();

//buat endpoint
router.get('/note', getNotes); 
router.get('/note/:id', getNotes);
router.post('/note', createNotes);
router.patch('/note/:id', UpdateNotes); 
router.delete('/note/:id', DeleteNotes);

export default router;