import ky from 'ky';
import { setJwtToken, getJwtToken, deleteJwtToken } from './jwtToken';
import { baseApiUrl, requestMode } from '@/const/api'
import type { Authentication, LoginResponse } from '@/types/authentication.type'
import type { ErrorMessages } from '@/types/errors.type'

class AuthService {
  isAuthenticated = () => {
    return getJwtToken() ? true: false
  }

  signin = async(datas: Authentication) =>  {
    try {
      const response: LoginResponse = await ky.post(baseApiUrl+'/auth/signin', {
        mode: requestMode,
        json: datas,
      }).json()
        setJwtToken(response.accessToken)
        localStorage.setItem('username', response.username)
        return response
    } catch (error: any) {
      const errorJson: ErrorMessages = await error.response.json()
      throw errorJson
    }
  }

  signup = async(datas: Authentication) =>  {
    try {
      const response: any = await ky.post(baseApiUrl+'/auth/signup', {
        mode: requestMode,
        json: datas,
        headers: getJwtToken()
      })
        return response;
    } catch (error: any) {
      const errorJson: ErrorMessages = await error.response.json()
      throw errorJson
    }
  }

  logout = () => {
    deleteJwtToken();
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
  }
}

export default new AuthService()