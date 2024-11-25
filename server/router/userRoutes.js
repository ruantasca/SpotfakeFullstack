// Rotas de usuário (UserRoutes.js)
import express from "express";
import { listarUsuarios, listarUsuarioPorEmail, excluirUsuario, trocarsenha } from "../controller/UsuarioController.js";

const rotasUsuario = express.Router();

rotasUsuario.get('/todos', listarUsuarios);
rotasUsuario.get('/usuario', listarUsuarioPorEmail);
rotasUsuario.delete('/excluir', excluirUsuario);
rotasUsuario.put('/trocarsenha', trocarsenha); 

export { rotasUsuario };
