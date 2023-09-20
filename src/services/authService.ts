import { useCookies } from '@vueuse/integrations/useCookies'

const tokenCookie = useCookies(['t']);

export const authService = {
  isAuthenticated() {
    return tokenCookie.get('t') ? true: false
  }
};