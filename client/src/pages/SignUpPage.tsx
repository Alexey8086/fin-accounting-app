import React, { useEffect, useContext, useState, FC } from 'react'
import { useNavigate } from "react-router-dom"
import { WALLETS_PG_ROUTE } from '../utils/consts'
import { observer } from "mobx-react-lite"
import '../styles/signUpPG/signUpPG.css'
import Menu from '../components/Menu'
import warn_icon from '../icons/warn.svg'
import { Context } from '../index'
import { registration} from '../http/userAPI'

const signUpPG: FC = observer(() => {


  const {user}:any = useContext(Context)
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [repeat_password, setRepeatPassword] = useState('')
  const [username, setUsername] = useState('')
  const [authError, setError] = useState(null)


  const authHandler = async () => {
    try {
      const res:any = await registration(username, password, repeat_password)
      user.user = {id: res.id, username: res.username}
      user.isAuth = true

      navigate(WALLETS_PG_ROUTE)
    } catch (e:any) {
      setError(e.response?.data?.message)
    }
  }


  return (
    <>

      {
        authError ?
        <div onClick={() => setError(null)} className = {'warning-msg'}>
          <img width={40} height={40} src={warn_icon} alt="Введены некорректные данные"/>
          <span>{authError}</span>
        </div>
        : null
      }

      <Menu />

      <div className={'signIn-block'}>
        <span className={'signIn-block__title'}>Регистрация</span>

        <div className={'signIn-block__field'}>
          <span className={'field-name'}>логин:</span>
          <input value={ username } onChange = { e => setUsername(e.target.value)} type="login" name="text" />
        </div>

        <div className={'signIn-block__field'}>
          <span className={"field-name"}>пароль:</span>
          <input value={ password } onChange = { e => setPassword(e.target.value)} type="password" name="password" />
        </div>

        <div className={'signIn-block__field'}>
          <span className={'field-name'}>пароль ещё раз:</span>
          <input value={ repeat_password } onChange = { e => setRepeatPassword(e.target.value)} type='password' name='repeat_password' />
        </div>

        <div className={'signIn-block__field'}>
          <button onClick={ authHandler } type='submit'>зарегистрироваться</button>
        </div>
      </div>
    </>
  )
})

export default signUpPG