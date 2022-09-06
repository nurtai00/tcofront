import { Context } from '@nuxt/types'
import { INetMethodParams, INetRepository } from './NetRepository.interfaces'
import Deserialize from 'services/Deserialize'

class BaseRepository implements INetRepository {
  protected endpoint = ''

  constructor(
    private $http: Context['$axios'],
    private deserializer: Deserialize
  ) {}

  /**
   * GET Запрос
   * @param params
   * @type { INetMethodParams<P> }
   * @return any
   */
  protected async get<P>(params?: INetMethodParams<P>) {
    try {
      return await this.$http.$get(this.endpoint + params?.nestedUrl, {
        params: params?.params,
      })
    } catch (e) {
      console.log('🐞 ~ file: index.ts ~ line 20 ~ BaseRepository ~ get ~ e', e)
      throw e
    }
  }

  /**
   * POST Запрос
   * @param params
   * @type { INetMethodParams<P> }
   * @return any
   */
  protected async post<P>(params?: INetMethodParams<P>) {
    try {
      return await this.$http.$post(
        this.endpoint + params?.nestedUrl,
        params?.params
      )
    } catch (e) {
      console.log('🐞 ~ file: index.ts ~ line 16 ~ BaseRepository ~ get ~ e', e)
      throw e
    }
  }

  /**
   * PUT Запрос
   * @param params
   * @type { INetMethodParams<P> }
   * @return any
   */
  protected async put<P>(params: INetMethodParams<P>) {
    try {
      return await this.$http.$put(
        this.endpoint + params?.nestedUrl,
        params?.params
      )
    } catch (e) {
      console.log('🐞 ~ file: index.ts ~ line 16 ~ BaseRepository ~ get ~ e', e)
      throw e
    }
  }

  /**
   * PATCH Запрос
   * @param params
   * @type { INetMethodParams<P> }
   * @return any
   */
  protected async patch<P>(params: INetMethodParams<P>) {
    try {
      return await this.$http.$patch(
        this.endpoint + params?.nestedUrl,
        params?.params
      )
    } catch (e) {
      console.log('🐞 ~ file: index.ts ~ line 16 ~ BaseRepository ~ get ~ e', e)
      throw e
    }
  }

  /**
   * DELETE Запрос
   * @param params
   * @type { INetMethodParams<P> }
   * @return any
   */
  protected async delete<P>(params: INetMethodParams<P>) {
    try {
      return await this.$http.$delete(this.endpoint + params?.nestedUrl, {
        data: params?.params,
      })
    } catch (e) {
      console.log('🐞 ~ file: index.ts ~ line 16 ~ BaseRepository ~ get ~ e', e)
      throw e
    }
  }

  /**
   * Ссылка на десериализоватор из класса
   * @class { Deserialize }
   * @param data
   * @return <R>
   */
  public deserialize<R>(data: any): R {
    return this.deserializer.deserialize(data)
  }

  /**
   * Ссылка на сериализоватор из класса
   * @class { Deserialize }
   * @param data
   * @return <R>
   */
  public serialize<R>(data: any): R {
    return this.deserializer.serialize(data)
  }
}

export default BaseRepository
