const express = require('express')
const route = express.Router()

const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('./controllers')

route.get('/users', getAllUsers) // rota para listar todos os geeks
route.get('/users/:id', getUser)
route.post('/users', createUser)
route.delete('/users/:id', deleteUser)
route.put('/users/:id', updateUser)

module.exports = route