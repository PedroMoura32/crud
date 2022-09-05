// receber requisição 

const express = require('express')
const route = express.Router()
const { getAll } = require('./user.service')
// const { middlewareCheck } = require('./middleware')

// const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('./controllers')

route.get('/', (req, res) => {
    const users = getAll()
    res.json(users)
}) // rota para listar todos os geeks
// route.get('/:id', middlewareCheck, getUser)
// route.post('/', createUser)
// route.delete('/:id', middlewareCheck, deleteUser)
// route.put('/:id', middlewareCheck, updateUser)



module.exports = route