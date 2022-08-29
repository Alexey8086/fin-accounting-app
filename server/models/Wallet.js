const {Schema, model} = require('mongoose')


const Wallet = new Schema({
    userId: {
        type: Schema.ObjectId,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    balance: {
        type: Number,
        require: true
    },
    date: {
        type: Date
    }
})

// первый параметр - название модели, второй - схема модели
module.exports = model('Wallet', Wallet)