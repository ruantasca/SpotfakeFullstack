// Controlador de autenticação (authController.js)
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from '../db.js';

const registrarUsuario = async (req, res) => {
    const { nome, sobrenome, email, senha, dataNascimento } = req.body;
    if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
        res.send('Todos os campos são obrigatórios.');
        return;
    }

    const usuarioExistente = await User.findOne({ where: { email } });
    if (usuarioExistente) {
        res.send('Usuário já existe.');
        return;
    }

    const senhaCriptografada = bcrypt.hashSync(senha, 10);
    await User.create({ nome, sobrenome, email, senha: senhaCriptografada, dataNascimento });

    res.send('Usuário registrado com sucesso!');
};

const autenticarUsuario = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        res.send('Todos os campos são obrigatórios.');
        return;
    }

    const usuarioExistente = await User.findOne({ where: { email } });
    if (!usuarioExistente) {
        res.send('Usuário não encontrado.');
        return;
    }

    const senhaValida = bcrypt.compareSync(senha, usuarioExistente.senha);
    if (!senhaValida) {
        res.send('Senha inválida.');
        return;
    }

    const token = jwt.sign(
        {
            "nome_completo": `${usuarioExistente.nome} ${usuarioExistente.sobrenome}`,
            "email": usuarioExistente.email,
            "status": usuarioExistente.status
        },
        "chaveSecretaJWT",
        { expiresIn: 1000 * 60 * 5 }
    );
    res.json({
        tokenJWT: token
    })
};

export { registrarUsuario, autenticarUsuario };
