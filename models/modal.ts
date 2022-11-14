export enum ModalType {
  Centered = 'centered',
  Default = 'default',
}
export interface IModal {
  title: string
  payload?: object
  id?: number
  type: ModalType
}
