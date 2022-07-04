export interface INetMethodParams<P> {
  nestedUrl?: string
  params?: P
}

export interface INetRepository {
  deserialize<R>(data: any): R
  serialize<R>(data: any): R
}
