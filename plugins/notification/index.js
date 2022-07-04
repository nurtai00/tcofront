export default ({ store }, inject) => {
  const notification = {
    success(payload) {
      store.commit('notifications/addNotification', {
        type: 'success',
        title: payload.title,
        description: payload.description,
      })
    },
    error(payload) {
      store.commit('notifications/addNotification', {
        type: 'error',
        title: payload.title,
        description: payload.description,
      })
    },
    remove(index) {
      store.commit('notifications/deleteNotification', index)
    },
  }

  inject('notification', notification)
}
