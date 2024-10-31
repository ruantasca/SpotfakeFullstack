import Express from "express";
import cors from "cors";
import { rotasAutenticacao } from "./router/authRoutes.js"
import { rotasUsuario } from "./router/userRoutes.js"

const app = Express()
app.use(Express.json())
app.use(cors())
app.use('/autenticacao', rotasAutenticacao)
app.use('/usuarios', rotasUsuario)

// -------- Porta
app.listen(8000)