import Express  from "express";
//import { User } from "./db.js";
import cors from "cors";
import {rotas} from './roteamento/rotas_autenticacao.js'
import { UserRotas } from "./roteamento/rotas_usuarios.js";



const app = Express () 
app.use(Express.json())
app.use(cors())
app.use('/autenticacao', rotas)
//criarTabelas()


//-----porta
app.listen(8000);