import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { NOTFOUND_PG_ROUTE } from '../utils/consts'
import { Context } from '../index'
import { observer } from "mobx-react-lite"

const AppRouter = observer((auth:boolean | any) => {

  return (
    <Routes>
      { auth.isAuth ?
        privateRoutes.map (
          ( {path, Component} ) =>
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
        ) : null
      }

      { publicRoutes.map (
          ( {path, Component} ) =>
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
        )
      }

      <Route path="*" element={ <Navigate replace to={ NOTFOUND_PG_ROUTE } /> } />

    </Routes>
  )
})

export default AppRouter