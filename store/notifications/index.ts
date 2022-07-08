import { ActionTree, MutationTree } from 'vuex'
import { RootState } from 'store'
import { INotification } from 'models/notification'

export const state = () => ({
  notifications: [] as INotification[],
})

export type StateT = ReturnType<typeof state>

export const namespaced = true

export const actions: ActionTree<StateT, RootState> = {}

export const mutations: MutationTree<StateT> = {
  /**
   * Добавление уведомления
   * @param state
   * @param data
   * @type {INotification}
   */
  addNotification(state: StateT, data: INotification) {
    data.id = Math.floor(Math.random() * (10000 - 1)) + 1
    state.notifications.push(data)
  },
  /**
   * Удаление уведомления
   * @param state
   * @param indexByArray
   * @type {number}
   */
  deleteNotification(state: StateT, indexByArray: number) {
    state.notifications.splice(
      state.notifications.findIndex((item) => indexByArray === item.id),
      1
    )
  },
}
