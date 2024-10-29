import { User } from "../db";

//rotas de usuarios
const UserRotas = express.rotas ()
    UserRotas.get('/todos', GetUsers)

export {UserRotas}