import { Plugin, Context } from '@nuxt/types'
import { IModal } from 'models/modal'

const plugin: Plugin = (ctx: Context, inject) => {
  const modal = {
    add(data: IModal) {
      ctx.store.commit('modal/add', data)
    },
    push(data: IModal) {
      ctx.store.commit('modal/push', data)
    },
    close() {
      ctx.store.commit('modal/close')
    },
  }
  inject('modal', modal)
}

export default plugin
