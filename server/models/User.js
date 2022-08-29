const {Schema, model} = require('mongoose')


const User = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

// первый параметр - название модели, второй - схема модели
module.exports = model('User', User)