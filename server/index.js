import Express  from "express";
import { User } from "./db.js";
import bryptjs from "bcryptjs"

const app = Express ()
app.use(Express.json())
//criarTabelas()

//------registro
app.post('/registro', async (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body

    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('voce deve ter todos os campos preenchidos ')
        return 
    }
    const userExiste = await User.findOne({where: {email:email}})
    if(userExiste){
        res.send('usuario ja existe')
        return
        
    }

    const senhaCriptografada = bryptjs.hashSync(senha, 10)

    const teste = await User.create({nome, sobrenome, email, senha: senhaCriptografada, dataNascimento})


    console.log(email)
    res.send('usuario criado')
}) 

//------login
app.post('/login', async (req, res) => {
    const {email, senha} = req.body

    if(!email || !senha  ){
        res.send('voce deve ter todos os campos preenchidos ')
        return 
    }
    const userExiste = await User.findOne({where: {email:email}})
    if(!userExiste){
        res.send('Este usuario não existe')
        return
        
    }
    const senhaValida = bryptjs.compareSync(senha, userExiste.senha)
    if (!senhaValida){
        res.send('senha invalida')
        return
    }

    console.log(email)
    res.send('usuario logado')
}) 
//-----porta
app.listen(8000)