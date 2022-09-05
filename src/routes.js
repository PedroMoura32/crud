const express = require('express')
const route = express.Router()
const { middlewareCheck } = require('./middleware')

const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('./controllers')

route.get('/users', middlewareCheck, getAllUsers) // rota para listar todos os geeks
route.get('/users/:id', middlewareCheck, getUser)
route.post('/users', createUser)
route.delete('/users/:id', middlewareCheck, deleteUser)
route.put('/users/:id', middlewareCheck, updateUser)

module.exports = route