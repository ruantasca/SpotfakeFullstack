import Express  from "express";
import { User } from "./db.js";
import bryptjs from "bcryptjs"
import  jsonwebtoken from "jsonwebtoken";
import cors from "cors";

const app = Express () 
app.use(Express.json())
app.use(cors())
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

    const token = jsonwebtoken.sign(
        {"nome_completo" :`${userExiste.nome} ${userExiste.sobrenome}`,
        "email": userExiste.email,
        "status": userExiste.status
        
    },
        'chavecriptografiajwt',
        {expiresIn: 1000*60*5 }
    )

    

    console.log(token)
    res.send({
        "msg": "ok usuario criado",
        "tokenJWT": token
        })

    })
     
//-----porta
app.listen(8000)