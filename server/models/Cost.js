const {Schema, model} = require('mongoose')


const Cost = new Schema({
    walletId: {
        type: Schema.ObjectId,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    money: {
        type: Number,
        require: true
    },
    date: {
        type: Date
    }
})

// первый параметр - название модели, второй - схема модели
module.exports = model('Cost', Cost)