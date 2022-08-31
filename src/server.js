const express = require('express')
const server = express()
server.use(express.json())
// const users = []

server.get('/users', (req, res) => {
    return res.json(users)
}) // rota para listar todos os geeks

server.get('/users/:id', (req, res) => {
    return res.send(users[req.params.id])
}) // rota para listar pelo id

server.post('/users', (req, res) => {
    const { name } = req.body
    const { age } = req.body

    let actualId
    for (let i = 0; i < users.length; i++) {
        if (i === users.length - 1) {
            actualId = users[i].id
        }
    }

    users.push(
        {
            id: actualId + 1,
            name,
            age
        }
    )
    return res.send()
})

server.delete('/users/:id', (req, res) => {
    const ne = users.splice(req.params.id, 1)
    return res.json(users)
})

server.put('/users/:id', (req, res) => {

    for (let i = 0; i < users.length; i++) {
        // console.log(users[req.params.id].id)
        if (i === users[req.params.id].id) {

            users[i] = {
                id: +req.params.id,
                name: req.body.name || users[i].name,
                age: req.body.age || users[i].age
            }

        }
    }


    return res.json(users)
})

server.listen(3000)
let users = [
    {
        "id": 0,
        "name": "Pedro",
        "age": 29
    },
    {
        "id": 1,
        "name": "Sabrina",
        "age": 32
    },
    {
        "id": 2,
        "name": "Vera",
        "age": 45
    }
]