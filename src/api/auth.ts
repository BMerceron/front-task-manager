import ky from 'ky';
import { baseApiUrl, setJwtToken } from './client';

export const signup = async(datas: any) =>  {
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

export const signin = async(datas: any) =>  {
  try {
    const response: any = await ky.post(baseApiUrl+'/auth/signin', {
      json: datas,
      mode: 'cors',
      }).json()
      setJwtToken(response)
      return response
  } catch (error: any) {
    const errorJson = await error.response.json()
    throw errorJson
  }
}
