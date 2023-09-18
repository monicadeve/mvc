import express from 'express';
import ProjetoController from '../controllers/projetoControllers';

const router = express.Router;

router
.length(ProjetoController.getAllprojetos)
.post(ProjetoController.createProjetos)

export default router;

