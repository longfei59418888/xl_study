const jsonwebtoken = require('jsonwebtoken')

const token = jsonwebtoken.sign({
    test: 'info'
}, 'secretOrPrivateKey', {
    expiresIn: 5
})

console.log(jsonwebtoken.verify(token, 'secretOrPrivateKey'))
setTimeout(() => {
    console.log(jsonwebtoken.verify(token, 'secretOrPrivateKey'))
}, 6500)