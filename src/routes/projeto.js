import express from 'express';
import ProjetoController from '../controllers/projetoControllers.js';

const router = express.Router();

router
.get("/",ProjetoController.getAllprojetos)
.post("/",ProjetoController.createProjetos)

export default router;

