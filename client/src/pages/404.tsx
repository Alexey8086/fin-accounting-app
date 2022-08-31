import React, { useContext, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { observer } from "mobx-react-lite"
import '../styles/404/404.css'
import Menu from '../components/Menu'
import { SIGNIN_PG_ROUTE } from '../utils/consts'

const NotFoundPage: FC = observer(() => {

  const navigate = useNavigate()
  const {user}:any = useContext(Context)

  // редирект на страницу авторизации, если пользователь не авторизован
  if (!user.getIsAuth) navigate(SIGNIN_PG_ROUTE)

  return (
    <>
      <Menu />

      <div className='pg-container'>
        <h1 className='neon'>404 NOT FOUND</h1>
        <h2 className='neon'>Упс, запрашиваемая вами страница не найдена ...</h2>
      </div>
    </>

  )
})

export default NotFoundPage