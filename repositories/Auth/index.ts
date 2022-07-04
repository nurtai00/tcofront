import { IAuth } from './Auth.interface'
import NetRepository from 'repositories/NetRepository'
// import { NetRepository } from "repositories/NetRepository/index"
import {
  IUserAuthData,
  IUserChangePasswordData,
  IUserForgotPasswordData,
  IUserResetPasswordData,
  JWTToken,
} from 'models/user'

export default class Auth extends NetRepository implements IAuth {
  endpoint = '/users'

  /**
   * Запрос на авторизацию
   * @param params
   * @type { IUserAuthData }
   * @return Promise<JWTToken>
   */
  public async sendAuthorized(params: IUserAuthData): Promise<JWTToken> {
    const serializeData = this.serialize({
      stuff: {
        type: 'users',
        ...params,
      },
    })
    const response = await this.post({
      params: serializeData,
      nestedUrl: '/login',
    })

    return this.deserialize<JWTToken>(response)
  }

  /**
   * Запрос на восстановление пароля
   * @param params
   * @type { IUserForgotPasswordData }
   * @return Promise<Boolean>
   */
  public async sendForgotPassword(
    params: IUserForgotPasswordData
  ): Promise<boolean> {
    const serializeData = await this.serialize({
      stuff: {
        type: 'users',
        ...params,
      },
    })

    await this.post({
      params: serializeData,
      nestedUrl: '/forgot',
    })

    return Promise.resolve(true)
  }

  /**
   * Запрос на сброс пароля
   * @param params
   * @type { IUserResetPasswordData }
   * @return Promise<Boolean>
   */
  public async sendResetPassword(
    params: IUserResetPasswordData
  ): Promise<boolean> {
    const serializeData = await this.serialize({
      stuff: {
        type: 'users',
        ...params,
      },
    })

    await this.post({
      params: serializeData,
      nestedUrl: '/forgot-password/reset',
    })

    return Promise.resolve(true)
  }

  /**
   * Запрос на смену пароля
   * @param params
   * @type { IUserChangePasswordData }
   * @return Promise<boolean>
   */
  public async sendChangePassword(
    params: IUserChangePasswordData
  ): Promise<boolean> {
    const serializeData = await this.serialize({
      stuff: {
        type: 'users',
        ...params,
      },
    })
    await this.patch({
      params: serializeData,
      nestedUrl: '/profile/reset-password',
    })

    return Promise.resolve(true)
  }
}
