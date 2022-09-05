const { users } = require('./controllers')

exports.middlewareCheck = (req, res, next) => {

    if(users.length === 0) {
        res.json({
            "msg": "Ainda não temos usuários!"
        })
    } else {
        next()
    }
}

// exports.middlewareCheckId = (req, res, next) => {
//     for(let i = 0; i < users.length; i++) {
//         req.params.id = +req.params.id

//         if(users[i].id === req.params.id) {
//             console.log('condição positiva')
//             next()
//         } else {
//             console.log('condição NEGATIVA')
//             res.json({
//                 "msg": "não temos este id"
//             })
//         }
//     }
// }