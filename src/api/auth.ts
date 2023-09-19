import ky from 'ky'
import { baseApiUrl, setJwtToken } from './client'

export const signup = async(datas: any) =>  {
  const response: any = await ky.post(baseApiUrl+'/auth/signup', {
  json: datas,
  mode: 'cors',
  })
  return response
}

export const signin = async(datas: any) =>  {
  const response: any = await ky.post(baseApiUrl+'/auth/signin', {
  json: datas,
  mode: 'cors',
  }).json()
  setJwtToken(response)
  return response
}
