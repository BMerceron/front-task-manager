<template>
  <v-app>
    <AppHeader v-if="AuthService.isAuthenticated()" :user="user" @disconnect="disconnect()" />
    <RouterView />
    <NotificationAlert v-model="alert.state" @close="closeAlert()" />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import NotificationAlert from './components/notifications/NotificationAlert.vue'
import AppHeader from '@/components/navigation/AppHeader.vue'
import { useAlertStore } from '@/stores/notificationAlert'
import AuthService from '@/services/authService'
import { useRouter } from 'vue-router'

const router = useRouter()

const alert = useAlertStore()

const user = ref({
  username: ''
})

onMounted(() => {
  if (localStorage.username) {
    user.value.username = localStorage.username
  }
})

const closeAlert = () => {
  alert.cleanAlertWithDelay(0)
}

const disconnect = () => {
  AuthService.logout()
  router.push({ name: 'signin' })
}
</script>

<style scoped></style>
