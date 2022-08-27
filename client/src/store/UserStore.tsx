import {makeAutoObservable, toJS} from 'mobx'

export interface IUser {
  id?: number
  login?: string
}

class UserStore {
  constructor () {
    makeAutoObservable(this)
  }

  user: IUser = {}
  isAuth: boolean = true // по умолчанию пользователь не авторизован (false)

  setUser(user: IUser) {
    this.user = user
  }

  setIsAuth(isAuth:boolean) {
    this.isAuth = isAuth
  }

  getUser():IUser {
    return toJS(this.user)
  }

  getIsAuth():boolean {
    return toJS(this.isAuth)
  }
}

const userStore = new UserStore()
export default userStore