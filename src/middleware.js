const { users } = require('./controllers')

exports.middlewareCheck = (req, res, next) => {

    if(users.length === 0) {
        res.json({
            "msg": "Ainda não temos cadastro!"
        })
    } else {
        next()
    }
}