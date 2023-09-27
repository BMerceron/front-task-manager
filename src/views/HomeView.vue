<template>
  <AppHeader :user="user" @disconnect="disconnect()" />
  <FloatingSquares />
</template>

<script setup lang="ts">
import AppHeader from '@/components/navigation/AppHeader.vue'
import FloatingSquares from '@/components/animations/FloatingSquares.vue'
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
