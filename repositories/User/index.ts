import { IUserChangeProfileData, IUserProfile } from '../../models/user'
import { IUser } from './User.interface'
import NetRepository from 'repositories/NetRepository'

export default class User extends NetRepository implements IUser {
  endpoint = '/users'

  /**
   * Запрос на получения профиля
   * @return Promise<IUserProfile>
   */
  public async getProfile(): Promise<IUserProfile> {
    const response = await this.get({
      nestedUrl: '/profile/show',
    })
    return this.deserialize<IUserProfile>(response)
  }

  /**
   * Запрос на редактирование(обновление, смену) пароля
   * @param params
   * @return Promise<boolean>
   */
  public async sendChangeProfile(
    params: IUserChangeProfileData
  ): Promise<boolean> {
    const serializeData = await this.serialize({
      stuff: {
        type: 'users',
        ...params,
      },
    })
    await this.patch({
      params: serializeData,
      nestedUrl: '/profile/update',
    })

    return Promise.resolve(true)
  }
}
