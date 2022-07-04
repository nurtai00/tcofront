import NetRepository from '../NetRepository'
import { IRegister } from './Register.interface'
import { IUserRegisterData, JWTToken } from 'models/user'

export default class Register extends NetRepository implements IRegister {
  endpoint = '/users'

  /**
   * Запрос на регистрацию
   * @param params
   * @type { IUserRegisterData }
   * @return Promise<JWTToken>
   */
  public async sendRegistered(params: IUserRegisterData): Promise<JWTToken> {
    const serializeData = await this.serialize({
      stuff: {
        type: 'users',
        ...params,
      },
    })

    const response = await this.post({
      params: serializeData,
      nestedUrl: '/register',
    })

    return this.deserialize<JWTToken>(response)
  }

  /**
   * Запрос на активацию почты (Электронный адрес, email)
   * @param params
   * @type { JWTToken }
   * @return Promise<boolean>
   */
  public async sendActivateEmail(params: JWTToken): Promise<boolean> {
    await this.get({
      nestedUrl: `/email/verify/${params.token}`,
    })
    return Promise.resolve(true)
  }
}
