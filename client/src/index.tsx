import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { ClassElement, ObjectType } from 'typescript'
import App from './App'
import userStore from './store/UserStore'

interface CtxValue {
  user: any;
}

export const Context = createContext<CtxValue | null>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Context.Provider value={{ user: new userStore() }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
)

