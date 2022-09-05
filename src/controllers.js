const users = []

exports.getAllUsers = () => {
    return res.json(users)
} // função para listar todos os geeks

exports.getUser = (req, res) => {
    return res.send(users[req.params.id])
} // função para listar pelo id

exports.createUser = (req, res) => create(req, res) // função para criar um novo usuário

exports.deleteUser = (req, res) => deleteById(req, res) // função para deletar um usuário pelo Id

exports.updateUser = (req, res) => update(req, res) // função para atualizar dados do usuário

function create(req, res) {
    const { name, age, gen } = req.body

    // let actualId
    // for (let i = 0; i < users.length; i++) {
    //     if (i === users.length - 1) {
    //         actualId = users[i].id
    //     }
    // }

    console.log(users.length)

    if (users.length !== 0) {
        users.push(
            {
                id: users.length,
                name,
                age: age || "não informado",
                gen: gen || "não informado"
            }
        )
    } else {
        users.push(
            {
                id: 0,
                name,
                age: age || 'não informado',
                gen: gen || "não informado"
            }
        )
    }
    return res.json(users)
}


function deleteById(req, res) {
    for (let i = 0; i < users.length; i++) {
        if (Number(req.params.id) === users[i].id) {
            delete users[i]
        }
    }

    return res.send(users)
}

function update(req, res) {
    for (let i = 0; i < users.length; i++) {

        if (users[i].id === Number(req.params.id)) {
            users[i] = {
                id: +req.params.id,
                name: req.body.name || users[i].name,
                age: +req.body.age || users[i].age,
                gen: req.body.gen || users[i].gen
            }

        }
    }

    return res.json(users)
}

exports.users = users