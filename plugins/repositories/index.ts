/* eslint-disable import/no-mutable-exports */
import { Context, Plugin } from '@nuxt/types'

import Auth from 'repositories/Auth'
import { IAuth } from 'repositories/Auth/Auth.interface'

import Register from 'repositories/Register'
import { IRegister } from 'repositories/Register/Register.interface'

import User from 'repositories/User'
import { IUser } from 'repositories/User/User.interface'

type repositoriesT = {
  auth: IAuth
  register: IRegister
  user: IUser
}

let $repositoriesAccessor: repositoriesT

declare module '@nuxt/types' {
  interface Context {
    $repositories: repositoriesT
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $repositories: repositoriesT
  }
}

const plugin: Plugin = (ctx: Context, inject) => {
  const repositories = {
    auth: new Auth(ctx.$axios, ctx.$services.deserialize),
    register: new Register(ctx.$axios, ctx.$services.deserialize),
    user: new User(ctx.$axios, ctx.$services.deserialize),
  }
  $repositoriesAccessor = repositories

  inject('repositories', repositories)
}

export default plugin
export { $repositoriesAccessor }
