const approve = require('approvejs')
const bcrypt = require('bcrypt')

class Validate {
  wallet (title, balance) {
    if (!approve.value(balance, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(title, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(balance, {numeric: true}).approved) {
      return {message: 'Неккоректное значение баланса (только целые числа)'}
    }

    if (!approve.value(title, {format: /^[A-Za-zА-Яа-я].*\S+$/}).approved) {
      return {message: 'Некорректное название кошелька (только буквы и цифры от 0 до 9)'}
    }

    return false
  }

  cost (title, balance) {
    if (!approve.value(balance, {required: true}).approved) {
        return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(title, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(balance, {numeric: true}).approved) {
      return {message: 'Неккоректное значение цены (только целые числа)'}
    }

    if (!approve.value(title, {format: /^[A-Za-zА-Яа-я].*\S+$/}).approved) {
      return {message: 'Некорректное название расхода (только буквы и цифры от 0 до 9)'}
    }

    return false
  }

  profit (title, balance) {
    if (!approve.value(balance, {required: true}).approved) {
        return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(title, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(balance, {numeric: true}).approved) {
      return {message: 'Неккоректное значение цены (только целые числа)'}
    }

    if (!approve.value(title, {format: /^[A-Za-zА-Яа-я].*\S+$/}).approved) {
      return {message: 'Некорректное название расхода (только буквы и цифры от 0 до 9)'}
    }

    return false
  }

  registration (username, password, password_repeat) {

    if (!approve.value(username, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(password, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(password_repeat, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(username, {range: {min: 8, max: 255}}).approved) {
      return {message: 'Логин должен быть не менее 8 символов и не более 255!'}
    }

    if (!approve.value(password, {range: {min: 1, max: 255}}).approved) {
      return {message: 'Пароль не должен быть более 72 символов!'}
    }

    // проверка паролей на совпадение значений
    const hashPass = bcrypt.hashSync(password, 7)
    if(!bcrypt.compareSync(password_repeat, hashPass)) return {message: 'Пароли не совпадают'}

    return false
  }

  login (username, password) {
    if (!approve.value(username, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    if (!approve.value(password, {required: true}).approved) {
      return {message: 'Все поля должны быть заполнены!'}
    }

    return false
  }
}

module.exports = new Validate()