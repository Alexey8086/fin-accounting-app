import React from 'react'
import '../styles/signUpPG/signUpPG.css'
import Menu from '../components/Menu'
import warn_icon from '../icons/plus.svg'

const signUpPG: React.FC = () => {
  return (
    <>
      <div className = {'warning-msg'}>
        <img width={40} height={40} src={warn_icon} alt="Введены некорректные данные"/>
        <span>message</span>
      </div>

      <Menu />

      <div className={'signIn-block'}>
        <span className={'signIn-block__title'}>Регистрация</span>

        <div className={'signIn-block__field'}>
          <span className={'field-name'}>логин:</span>
          <input type="email" name="email" />
        </div>

        <div className={'signIn-block__field'}>
          <span className={"field-name"}>пароль:</span>
          <input type="email" name="email" />
        </div>

        <div className={'signIn-block__field'}>
          <span className={'field-name'}>пароль ещё раз:</span>
          <input type='password' name='passCompare' />
        </div>

        <div className={'signIn-block__field'}>
          <button type='submit'>зарегистрироваться</button>
        </div>
      </div>
    </>
  )
}

export default signUpPG