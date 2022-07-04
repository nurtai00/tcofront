import { Context } from '@nuxt/types'
import { IErrorHandler } from './ErrorHandler.interface'
import { ErrorMessagesT, IResponseError } from 'models/responseError'

class ErrorHandlerService implements IErrorHandler {
  private readonly message: ErrorMessagesT = {
    401: 'Пожалуйста авторизуйтесь, чтобы выполнить это действие.',
    402: 'Для данного действия необходима оплата.',
    403: 'Действие запрещено.',
    404: 'Действие к которому вы обратились не существует.',
    405: 'Действие к которому вы обратились не поддерживается.',
    423: 'Действие к которому вы обратились заблокировано.',
    500: 'Увы, у нас возникла техническая неполадка. Пожалуйста, попробуйте позже.',
    501: 'Данное действие не может выполнится.',
    502: 'Время ожидания истекло. Попробуйте повторить действие.',
    503: 'В данный момент сервис не доступен для работы. Извиняемся, за предоставленные неудобства.',
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private $error: Context['error'],
    private $store: Context['store']
  ) {}

  /**
   * Обработка ошибки перехваченный с axios
   * @param code
   * @type number | string
   */
  public onError(code: number | string) {
    if (this.message[code]) {
      this.$error({
        statusCode: Number(code),
        message: this.message[code],
      })
    }
  }

  /**
   * Добавление ошибок в уведомлении
   * @param data
   * @type { IResponseError }
   */
  public addNotifications(data: IResponseError) {
    data.errors.forEach((error) => {
      this.$store.commit('notifications/addNotification', {
        title: error.title,
        description: error.detail,
        type: 'error',
      })
    })
  }
}

export default ErrorHandlerService
