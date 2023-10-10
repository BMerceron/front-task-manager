import ky from 'ky';
import { useCookies } from '@vueuse/integrations/useCookies'
import { baseApiUrl } from '@/const/api'
import type { Authentication, LoginResponse, ErrorMessages } from '@/types/authentication.type';

const tokenCookie = useCookies(['t']);

class AuthService {
  isAuthenticated = () => {
    return tokenCookie.get('t') ? true: false
  }

  signin = async(datas: Authentication) =>  {
    try {
      const response: LoginResponse = await ky.post(baseApiUrl+'/auth/signin', {
        json: datas,
        mode: 'cors',
        }).json()
        this.setJwtToken(response.accessToken)
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
        json: datas,
        mode: 'cors',
        })
        return response;
    } catch (error: any) {
      const errorJson: ErrorMessages = await error.response.json()
      throw errorJson
    }
  }

  logout = () => {
    this.deleteJwtToken();
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
  }

  setJwtToken = (token: string) => {
    tokenCookie.set('t', token)
  }

  deleteJwtToken = () => {
    tokenCookie.remove('t')
  }
}

export default new AuthService()