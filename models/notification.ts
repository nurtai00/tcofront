export interface INotification {
  title: string
  description?: string
  type: 'success' | 'error'
  id?: number
}
