import { MutationTree } from 'vuex'
import { ISide } from 'models/side'

export const state = () => ({
  side: Object as ISide,
  open: false,
})

export type ModalStateT = ReturnType<typeof state>

export const mutations: MutationTree<ModalStateT> = {
  open(state, data: ISide) {
    state.side = data
    state.open = true
  },
  close(state) {
    state.open = false
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
