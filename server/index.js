import Express  from "express";

const app = Express ()
app.use(Express.json())


app.post('/registro', (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body

    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('voce deve ter todos os campos preenchidos ')
        return 
    }

    console.log(email)
    res.send('usuario criado')
}) 


app.post('/login', (req, res) => {
    const {email, senha} = req.body

    if(!email || !senha  ){
        res.send('voce deve ter todos os campos preenchidos ')
        return 
    }

    console.log(email)
    res.send('usuario logado')
}) 

app.listen(8000)