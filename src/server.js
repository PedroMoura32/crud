const express = require('express')
const server = express()
// const routes = require('./routes')
const users = require('./users/user.controller')


server.use(express.json())
server.use("/users", users)

server.listen(3000)