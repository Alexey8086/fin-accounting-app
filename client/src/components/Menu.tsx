import React, { useContext, FC} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { observer } from "mobx-react-lite"
import { SIGNUP_PG_ROUTE, SIGNIN_PG_ROUTE, WALLETS_PG_ROUTE } from '../utils/consts'
import '../styles/menu/menu.css'

const Menu: FC = observer(() => {

  const { user }:any = useContext(Context)
  const navigate = useNavigate()

  const logoutHandler = (isAuth:boolean):void => {
    if (isAuth) {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token')
      navigate(SIGNIN_PG_ROUTE)
    }
  }

  return (

    <div className={'top-menu'}>
        <div className={'top-menu__links-container'}>
        <span id={'signIn'}>
          {
            user?.isAuth ? <Link to={ WALLETS_PG_ROUTE }>Мои кошельки</Link>: <Link to={ SIGNIN_PG_ROUTE }>Войти</Link>
          }
        </span>

        <span onClick={ () => logoutHandler(user?.isAuth) } id={'signUp'}> { user?.isAuth ? 'Выйти' : <Link to={ SIGNUP_PG_ROUTE }>Зарегистрироваться</Link> } </span>
        </div>
    </div>

  )
})

export default Menu