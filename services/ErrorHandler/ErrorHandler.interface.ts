export interface IErrorHandler {
  onError(code: number | string): void
  addNotifications(params: object): void
}
