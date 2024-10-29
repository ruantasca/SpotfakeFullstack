import bryptjs from "bcryptjs"
import { User } from "../db.js";
import  jsonwebtoken  from "jsonwebtoken";

//registro
const registro = async (req, res) => {
    const { nome, sobrenome, email, senha, dataNascimento } = req.body

    if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
        res.send('voce deve ter todos os campos preenchidos ')
        return
    }
    const userExiste = await User.findOne({ where: { email: email } })
    if (userExiste) {
        res.send('usuario ja existe')
        return

    }
    const senhaCriptografada = bryptjs.hashSync(senha, 10)
    const teste = await User.create({ nome, sobrenome, email, senha: senhaCriptografada, dataNascimento })

    res.send("usuario criado com sucesso")
}

//login
const login =  async (req, res) => {
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

    res.send('Usuário logado com sucesso')
}

export {registro, login}