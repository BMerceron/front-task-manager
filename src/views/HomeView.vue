<template>
  <AppHeader :user="user" @disconnect="disconnect()" />
</template>

<script setup lang="ts">
import AppHeader from '@/components/navigation/AppHeader.vue'
import { useUserProfilStore } from '@/stores/userProfil'
import { useRouter } from 'vue-router'

const userStore = useUserProfilStore()
const router = useRouter()

const user = userStore.getUser()

const disconnect = () => {
  userStore.disconnect()
  router.push({ name: 'signin' })
}
</script>
