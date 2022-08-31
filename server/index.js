require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
const { env } = require('process')

const PORT = process.env.PORT || 5000
const DB_CONNECT_URL = `mongodb+srv://Alexey:DdT0JiPMwmwihEX8@cluster1.8phhwfx.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

app.use('/api', router)

if (process.env.NODE_ENV = 'production') {
  app.use(express.static('../client/build'))
}

const start = async () => {
  try {
    await mongoose.connect(DB_CONNECT_URL)
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.warn(e)
  }
}

start ()