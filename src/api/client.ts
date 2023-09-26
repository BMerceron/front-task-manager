import { useCookies } from '@vueuse/integrations/useCookies'

export const host = import.meta.env.VITE_API_HOST;
export const port = import.meta.env.VITE_API_PORT;
export const baseApiUrl = `http://${host}:${port}`;

const tokenCookie = useCookies(['t']);

export const setJwtToken = (token: string) => {
  tokenCookie.set('t', token)
}

export const deleteJwtToken = () => {
  tokenCookie.remove('t')
}