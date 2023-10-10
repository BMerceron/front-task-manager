<template>
  <AppHeader :user="user" @disconnect="disconnect()" />
  <FloatingSquares> </FloatingSquares>
  <!-- TODO : create a réusable v-layout component for other pages -->
  <v-layout>
    <h1>Bonjour {{ user.username }}, que voulez vous faire aujourd'hui ?</h1>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/navigation/AppHeader.vue'
import FloatingSquares from '@/components/animations/FloatingSquares.vue'
import { useRouter } from 'vue-router'
import AuthService from '@/services/authService'

const router = useRouter()
let user = ref({
  username: ''
})

onMounted(() => {
  if (localStorage.username) {
    user.value.username = localStorage.username
  }
})

const disconnect = () => {
  AuthService.logout()
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
