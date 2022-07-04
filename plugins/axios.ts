import { Context } from '@nuxt/types'

export default function (ctx: Context) {
  ctx.$axios.onError((error) => {
    const code = error.code || error.response?.status
    if (Number(code) >= 400 && Number(code) < 500) {
      ctx.$services.errors.addNotifications(error?.response?.data)
    } else if (code) {
      ctx.$services.errors.onError(code)
    }
  })
}
