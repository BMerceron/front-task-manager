import { useCookies } from '@vueuse/integrations/useCookies'

const tokenCookie = useCookies(['t']);

const setJwtToken = (token: string) => {
  return tokenCookie.set('t', token)
}

const getJwtToken = () => {
  let token = null
  if(tokenCookie.get('t')) {
    token = { authorization: "bearer " + tokenCookie.get('t') }
    return token
  }
  return token;
}

const deleteJwtToken = () => {
  return tokenCookie.remove('t')
}

export {
    setJwtToken,
    getJwtToken,
    deleteJwtToken
}