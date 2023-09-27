<template>
  <AppHeader :user="user" @disconnect="disconnect()" />
  <FloatingSquares> </FloatingSquares>
  <!-- TODO : create a réusable v-layout component for other pages -->
  <v-layout>
    <h1>Bonjour {{ user.username }}, que voulez vous faire aujourd'hui ?</h1>
  </v-layout>
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

<style scoped>
.v-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 20px 20px 20px;
}
</style>
