exports.getAllUsers = (req, res) => {
    return res.json(users)
} // função para listar todos os geeks

exports.getUser = (req, res) => {
    return res.send(users[req.params.id])
} // função para listar pelo id

exports.createUser = (req, res) => create(req, res) // função para criar um novo usuário

exports.deleteUser = (req, res) => {
    const ne = users.splice(req.params.id, 1)
    return res.json(users)
} // função para deletar um usuário

exports.updateUser = (req, res) => {
    for (let i = 0; i < users.length; i++) {
        // console.log(users[req.params.id].id)
        if (i === users[req.params.id].id) {

            users[i] = {
                id: +req.params.id,
                name: req.body.name || users[i].name,
                age: req.body.age || users[i].age,
                gen: +req.body.gen || users[i].gen
            }

        }
    }

    return res.json(users)
} // função para atualizar dados do usuário

// const users = []

let users = [
    {
        "id": 0,
        "name": "Pedro",
        "age": 29,
        "gen": 'm'
    },
    {
        "id": 1,
        "name": "Sabrina",
        "age": 32,
        "gen": 'f'
    },
    {
        "id": 2,
        "name": "Vera",
        "age": 45,
        "gen": 'f'
    }
]

function create(req, res) {
    const { name, age, gen } = req.body

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
            age: age || 'não informado',
            gen: gen || "não informado"
        }
    )
    return res.json(users)
}

function deleteU() {

}
