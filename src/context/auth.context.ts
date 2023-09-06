import {createContext} from 'react'

export interface IAuthToken {
  userId: number
  name: string
  exp: number
  iat: number
  role: string
}

function noop () {}
 interface  IAuthContext {
  token: null | string
  login: (token: string) => void
  logout: () => void
  role: null | string
}

export const AuthContext = createContext({
  token: null,
  login: noop,
  logout: noop,
  role: null
} as IAuthContext)