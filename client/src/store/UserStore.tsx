import { action, computed, makeObservable, observable } from "mobx";

export interface Iuser {
  id: string
  username: string
}


export default class userStore {
  user: Iuser | null = null
  isAuth: boolean = false
  someChangesInDB: string = ''

  constructor() {
    makeObservable(this, {
      user: observable,
      isAuth: observable,
      someChangesInDB: observable,
      setUser: action,
      setIsAuth: action,
      setSomeChangesInDB: action,
      getUser: computed,
      getIsAuth: computed,
      getSomeChangesInDB: computed
    })


  }


  setUser(user: Iuser) {
    this.user = user
  }

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth
  }

  setSomeChangesInDB(someChangesInDB: string) {
    this.someChangesInDB = someChangesInDB
  }

  get getUser() {
    return this.user
  }

  get getIsAuth() {
    return this.isAuth
  }

  get getSomeChangesInDB() {
    return this.someChangesInDB
  }
}