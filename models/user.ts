import { TJsonaModel } from 'jsona/lib/JsonaTypes'

export interface IUserRegisterData {
  email: string
  password: string
  passwordConfirmation: string
  name: string
  lastName: string
  patronymic?: string
}
export interface IUserAuthData {
  email: string
  password: string
}
export interface IUserForgotPasswordData {
  email: string
}
export interface IUserResetPasswordData {
  email: string
  password: string
  passwordConfirmation: string
  token: string
}

export interface JWTToken extends TJsonaModel {
  token: string
}

export interface IUserProfile {
  name: string
  lastName: string
  patronymic: string
}

export interface IUserChangePasswordData {
  currentPassword: string
  password: string
  passwordConfirmation: string
}

export interface IUserChangeProfileData {
  name: string
  lastName: string
  patronymic: string
}
