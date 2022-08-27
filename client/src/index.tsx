import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import userStore from './store/UserStore'
import { IUser } from './store/UserStore'

type cxtValue = {
  user: IUser
  isAuth: boolean
}

export const Context = createContext<cxtValue | null>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Context.Provider value={{ user: userStore.user, isAuth: userStore.isAuth }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
)

