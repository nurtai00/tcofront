/* eslint-disable import/no-mutable-exports */
import { Context, Plugin } from '@nuxt/types'
import Deserialize from 'services/Deserialize'
import ErrorHandler from 'services/ErrorHandler'
import Validate from 'services/Validate'
import Mask from 'services/Mask'
import { IErrorHandler } from 'services/ErrorHandler/ErrorHandler.interface'

type servicesT = {
  errors: IErrorHandler
  deserialize: Deserialize
  validate: Validate
  mask: Mask
}

let $servicesAccessor: servicesT

declare module '@nuxt/types' {
  interface Context {
    $services: servicesT
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $services: servicesT
  }
}

const plugin: Plugin = (ctx: Context, inject) => {
  const services = {
    errors: new ErrorHandler(ctx.error, ctx.store),
    deserialize: new Deserialize(),
    validate: new Validate(),
    mask: new Mask(),
  }
  $servicesAccessor = services

  inject('services', services)
}

export default plugin
export { $servicesAccessor }
