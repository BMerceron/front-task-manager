import { ref } from 'vue'
import { defineStore } from 'pinia'
import AuthService from '@/services/authService'

export const useUserProfilStore = defineStore('userProfil', () => {
  const state = ref({
    username: '',
  });
  
  const disconnect = () => {
    AuthService.deleteJwtToken();
    state.value.username = ''
  }

  const setUser = (username: string) => {
    state.value.username = username;
    sessionStorage.setItem('user', state.value.username)
  }

  const getUser = () => {
    return state.value
  }

  return {
    state,
    disconnect,
    setUser,
    getUser
  }
})
