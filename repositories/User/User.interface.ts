import { IUserChangeProfileData, IUserProfile } from 'models/user'

export interface IUser {
  getProfile(): Promise<IUserProfile>
  sendChangeProfile(params: IUserChangeProfileData): Promise<boolean>
}
