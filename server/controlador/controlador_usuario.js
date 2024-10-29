//criar rotas para listar todos os usuarios

const express = require(req, res)
const userExiste = await User.findAll({ where: { email: email } })
    if (userExiste) {
        res.send('usuario ja existe')
        return

    }