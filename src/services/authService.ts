import ky from 'ky';
import { useCookies } from '@vueuse/integrations/useCookies'

const tokenCookie = useCookies(['t']);
const host = import.meta.env.VITE_API_HOST;
const port = import.meta.env.VITE_API_PORT;
const baseApiUrl = `http://${host}:${port}`;

class AuthService {
  isAuthenticated() {
    return tokenCookie.get('t') ? true: false
  }

  signin = async(datas: any) =>  {
    try {
      const response: any = await ky.post(baseApiUrl+'/auth/signin', {
        json: datas,
        mode: 'cors',
        }).json()
        this.setJwtToken(response)
        return response
    } catch (error: any) {
      const errorJson = await error.response.json()
      throw errorJson
    }
  }

  signup = async(datas: any) =>  {
    try {
      const response: any = await ky.post(baseApiUrl+'/auth/signup', {
        json: datas,
        mode: 'cors',
        })
        return response;
    } catch (error: any) {
      const errorJson = await error.response.json()
      throw errorJson
    }
  }
  
  setJwtToken = (token: string) => {
    tokenCookie.set('t', token)
  }

  deleteJwtToken = () => {
    tokenCookie.remove('t')
  }
}

export default new AuthService()