import {
  IUserAuthData,
  JWTToken,
  IUserForgotPasswordData,
  IUserResetPasswordData,
  IUserChangePasswordData,
} from 'models/user'

export interface IAuth {
  sendAuthorized(params: IUserAuthData): Promise<JWTToken>
  sendForgotPassword(params: IUserForgotPasswordData): Promise<boolean>
  sendResetPassword(params: IUserResetPasswordData): Promise<boolean>
  sendChangePassword(params: IUserChangePasswordData): Promise<boolean>
}
