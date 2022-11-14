import { MutationTree } from 'vuex'
import { IModal, ModalType } from 'models/modal'

export const state = () => ({
  modals: [] as IModal[],
  type: ModalType.Default,
})

export type ModalStateT = ReturnType<typeof state>

export const mutations: MutationTree<ModalStateT> = {
  // добавление в пустой массив
  add(state, data: IModal) {
    data.id = 1
    state.modals = [data]
    state.type = data.type || ModalType.Default
  },
  // добавление в массив с несколькими модалок
  push(state, data: IModal) {
    data.id = state.modals.length + 1
    state.modals.push(data)
  },
  // удаление последней модалки из массива
  close(state) {
    state.modals.pop()
  },
  // удаление всех модалок из массива
  clear(state) {
    state.modals = []
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
