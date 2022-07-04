export interface ISourceInBack {
  pointer: string
}

export interface IMoreError {
  about?: string
  related?: {
    href?: string
    meta?: {
      count?: number
    }
  }
}

export interface IMetaError {
  copyright?: string
  authors?: string[]
}

export interface IError {
  status: string
  title: string
  detail: string
  source?: ISourceInBack
  id?: string
  links?: IMoreError
  code?: string
  meta?: IMetaError
}

export interface IResponseError {
  errors: IError[]
}

export type ErrorMessagesT = {
  [key in number | string]?: string
}
