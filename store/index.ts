import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isLogged(state) {
    // @ts-ignore
    return state.authNuxt.loggedIn
  },
}

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<RootState, RootState> = {
  // async nuxtServerInit(store: any) {
  // if (store.state.authNuxt.loggedIn) {
  //   await store.dispatch('user/getProfile')
  // }
  // },
}
