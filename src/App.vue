<template>
  <v-app>
    <RouterView />
    <NotificationAlert v-model="alert.state" @close="closeAlert()" />
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NotificationAlert from './components/notifications/NotificationAlert.vue'
import { useAlertStore } from '@/stores/notificationAlert'

const alert = useAlertStore()

const closeAlert = () => {
  alert.cleanAlertWithDelay(0)
}
</script>

<style scoped></style>
