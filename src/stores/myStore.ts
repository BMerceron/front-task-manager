import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', () => {
  return console.log('my new store')
})
