import express from "express"
import {registro, login} from '../controlador/controlador_autenticacao.js'

const rotas = express.Router()
//------registro
rotas.post('/registro', registro)

//------login
rotas.post('/login', login)

export {rotas}