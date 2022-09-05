// recebe a chamada do controller
// chama o database
// uma overengeneer - COISA DEMAIS

const { find } = require('../databases/Users')

const getAll = () => {
    const users = find()
    return users.filter(user => !!user) // COMO FUNCIONA???
}

module.exports = { getAll }