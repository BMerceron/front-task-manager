import { ref } from 'vue'
import { defineStore } from 'pinia'
import { deleteJwtToken } from '@/api/client'

export const useUserProfilStore = defineStore('userProfil', () => {
  const state = ref({
    username: '',
  });
  
  const disconnect = () => {
    deleteJwtToken();
    state.value.username = ''
  }

  const setUser = (username: string) => {
    state.value.username = username;
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
