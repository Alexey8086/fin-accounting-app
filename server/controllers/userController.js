const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Validate = require('../utils/validate')

const generateJwt = (id, username) => {
    return jwt.sign(
      { id, username},
      process.env.SECRET_KEY,
      { expiresIn: '10h' }
    )
}

class UserController {

  async registration (req, res) {
    try {
        const {username, password, password_repeat} = req.body

        // валидация клиента
        const validateError =  Validate.registration(username, password, password_repeat)
        if (validateError) return res.json(validateError)

        // проверка уникальности логина
        const candidate = await User.findOne({username})
        if (candidate) return res.json({message: 'Введённый логин уже занят'})

        // создание пользователя
        const hashPass = bcrypt.hashSync(password, 7)
        const user = new User({username, password: hashPass})
        await user.save()

        return res.json({message: 'Пользователь успешно зарегистрирован'})

    } catch (err) {
        return res.json({message: `Registration error ${err}`})
    }
  }

  async login (req, res) {
    try {
        const {username, password} = req.body

        // валидация клиента
        const validateError = Validate.login(username, password, res)
        if (validateError) return res.json(validateError)

        const user = await User.findOne({username})

        if (!user) {
          return res.json({message: 'Пользователь не найден'})
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
          return res.json({message: 'Указан неверный пароль'})
        }

        const token = generateJwt(user._id, user.username)
        res.json({token})

    } catch (err) {
        res.status(400).json({message: `Ошибка авторизации ${err}`})
    }
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.username)
    return res.json({token})
  }

  async getUser (req, res) {
    const {id} = req.params
    const user = await User.findOne({_id: id})
    if (!user) {
      return res.json('Упс, у вас проблемы с аутентификацией, мы не можем вас найти')
    }

    return res.json({user})
  }

}

module.exports = new UserController()