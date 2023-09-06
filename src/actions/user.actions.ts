import {axiosAuthorized} from "../axios";
import {ILoginForm} from "../types/login-form.interface";


export const loginUserRequest = async ( {login, password} : ILoginForm ) => {
  let response = null

  try {
    const data = await axiosAuthorized.post(
      'api/auth/login',
      {login, password}
    )

    response = data.data
  } catch (error) {
    console.warn(error)
  }

  return response
}

export const registerUserRequest = async ( {login, password} : ILoginForm ) => {
  let response = null

  try {
    const data = await axiosAuthorized.post(
      'api/auth/register',
      {login, password}
    )

    response = data.data
  } catch (error) {
    console.warn(error)
  }

  return response
}