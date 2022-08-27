import React, { useContext } from 'react'
import { Context } from '../index'
import { observer } from "mobx-react-lite"
import '../styles/menu/menu.css'

const Menu: React.FC = observer(() => {

  const user = useContext(Context)

  return (

    <div className={'top-menu'}>
        <div className={'top-menu__links-container'}>
        <span id={'signIn'}> { user?.isAuth ? 'Мои кошельки' : 'Войти' }   </span>
        <span id={'signUp'}> { user?.isAuth ? 'Выйти' : 'Зарегистрироваться' } </span>
        </div>
    </div>

  )
})

export default Menu