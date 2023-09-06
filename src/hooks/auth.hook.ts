import {useState, useCallback, useEffect} from 'react'
const storageName = 'Authorization'

export const useAuth = () => {
  const [token, setToken] = useState<null | string>(null)
  const [role, setRole] = useState<null | string>(null)

  const login = useCallback((jwtToken: string) => {
    setRole('user')
    setToken(jwtToken)
    localStorage.setItem(storageName, jwtToken)
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setRole( 'guest')
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = localStorage.getItem(storageName)
    if (data) {
      return login(data)
    }
    setRole("guest")
  }, [login])

  return {login, logout, token, role}
}