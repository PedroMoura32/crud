const user = {}

const allUser = []

function createUser(name, age, gen) {

    const newUser = {
        name: name,
        age: age,
        gen: gen,
        id: allUser.length
    }

    allUser.push(newUser)
}

function updateUser(id, name, age, gen) {
     if(name) {
        
     }
}

createUser('Pedro', 18, 'm')
createUser('Sabrina', 21, 'f')
createUser('Vera', 31, 'f')

console.log(allUser)