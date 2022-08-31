import React, { useEffect, useContext, useState, FC } from 'react'
import { useNavigate } from "react-router-dom"
import { WALLETS_PG_ROUTE } from '../utils/consts'
import { observer } from "mobx-react-lite"
import { Context } from '../index'
import { login } from '../http/userAPI'
import '../styles/signInPG/signInPG.css'
import Menu from '../components/Menu'
import warn_icon from '../icons/warn.svg'


const SignInPG: FC = observer(() => {


  const { user }:any = useContext(Context)
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [authError, setError] = useState(null)


  const authHandler = async () => {
    try {
      const res:any = await login(username, password)
      user.setUser({id: res.id, username: res.username})
      user.setIsAuth(true)

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

        <span className={'signIn-block__title'}>Вход</span>

        <div className={'signIn-block__field'}>
          <span className={'field-name'}>логин:</span>
          <input value={ username } onChange = { e => setUsername(e.target.value)} type="login" name="username" />
        </div>

        <div className={'signIn-block__field'}>
          <span className={"field-name"}>пароль:</span>
          <input value={ password } onChange = { e => setPassword(e.target.value)} type="password" name="password" />
        </div>

        <div className={'signIn-block__field'}>
          <button onClick={ authHandler } type="submit">войти</button>
        </div>

      </div>
    </>
  )
})

export default SignInPG