// Controlador de usuário (usuarioController.js)
import { User } from '../db.js';

const listarUsuarios = async (req, res) => {
    const todosUsuarios = await User.findAll();
    res.send(todosUsuarios);
};

const listarUsuarioPorEmail = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.send('Por favor, forneça o email do usuário.');
        return;
    }

    const usuario = await User.findOne({ where: { email } });
    res.send(usuario);
};

const excluirUsuario = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.send('Por favor, forneça o email do usuário que deseja excluir.');
        return;
    }

    const usuarioExcluido = await User.destroy({ where: { email } });
    if (usuarioExcluido) {
        res.send("Usuário excluído com sucesso.");
    } else {
        res.send("Usuário não encontrado.");
    }
};

export { listarUsuarios, listarUsuarioPorEmail, excluirUsuario };
