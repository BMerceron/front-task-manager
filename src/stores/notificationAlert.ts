import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  const state = ref({
    enable: false,
    title: 'Error',
    text: 'Error text',
    type: 'error',
    // color: 'red',
    // icon:'$vuetify'  
  });
  
  const alertSuccess = (title: string, text: string) => {
    state.value.enable = true
    state.value.title = title
    state.value.text = text
    state.value.type = 'success'
    cleanAlertWithDelay(10000)
  }
  const alertError = (title: string, text: string) => {
    state.value.enable = true
    state.value.title = title
    state.value.text = text
    state.value.type = 'error'
    cleanAlertWithDelay(10000)
  }
  const alertWarning = (title: string, text: string) => {
    state.value.enable = true
    state.value.title = title
    state.value.text = text
    state.value.type = 'warning'
    cleanAlertWithDelay(10000)
  }
  const alertInfo = (title: string, text: string) => {
    state.value.enable = true
    state.value.title = title
    state.value.text = text
    state.value.type = 'info'
    cleanAlertWithDelay(10000)
  }

  const cleanAlertWithDelay = (delay: number) => {
    if(state.value.enable === true) {
      setTimeout(() => {
        state.value.enable = false;
      }, delay);
    }
  }



  return {
    state,
    alertSuccess,
    alertError,
    alertWarning,
    alertInfo,
    cleanAlertWithDelay
  }
})
