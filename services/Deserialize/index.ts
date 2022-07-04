import { Jsona, SwitchCaseJsonMapper, SwitchCaseModelMapper } from 'jsona'

class Deserialize {
  private formatter = new Jsona({
    modelPropertiesMapper: new SwitchCaseModelMapper({
      switchChar: '_',
    }),
    jsonPropertiesMapper: new SwitchCaseJsonMapper({ switchChar: '_' }),
  })

  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  /**
   * Сериализация данных при отправке запроса
   * @param data
   * @type any
   * @return any
   */
  public serialize(data: any): any {
    return data && this.formatter.serialize(data)
  }

  /**
   * Десериализация данных при принятии ответа с запроса
   * @param data
   * @type any
   * @return any
   */
  public deserialize(data: any): any {
    return data && this.formatter.deserialize(data)
  }
}

export default Deserialize
