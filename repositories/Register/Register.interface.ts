import { IUserRegisterData, JWTToken } from 'models/user'

export interface IRegister {
  sendRegistered(params: IUserRegisterData): Promise<JWTToken>
  sendActivateEmail(params: JWTToken): Promise<boolean>
}
