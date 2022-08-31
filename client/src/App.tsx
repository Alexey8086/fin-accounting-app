import React, { useContext, useEffect, useState, FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { observer } from 'mobx-react-lite'
import { Context } from './index'
import { check } from './http/userAPI'

const App: FC = observer(() => {

  const {user}:any = useContext(Context)


  useEffect(() => {
    check()
    .then(data => {
      console.log('INIT CHECK --->>> ', user)
      user.setUser(data)
      user.setIsAuth(true)
    })
    .catch((err) => console.warn(err?.response?.data?.message))

  }, [])

  return (
    <BrowserRouter>
      <AppRouter isAuth={user.getIsAuth}/>
    </BrowserRouter>
  )
})

export default App
