<template>
  <AuthForm v-model="credentials" :messages="messages" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AuthForm from '../components/forms/AuthForm.vue'
import AuthService from '@/services/authService'
import { useRoute, useRouter } from 'vue-router'
import { useAlertStore } from '@/stores/notificationAlert'
import type { Authentication, ErrorMessages } from '@/types/authentication.type'

const route = useRoute()
const router = useRouter()
const credentials = ref()
const alert = useAlertStore()
let messages = ref()

watch(
  () => credentials.value,
  (newCredentials: Authentication) => {
    if (route.name === 'signup') {
      AuthService.signup(newCredentials)
        .then(() => {
          router.push({ name: 'home' })
          alert.alertSuccess(
            'Création de compte réussie',
            'Vous pouvez désormais vous connecter avec vos identifiants. Bien joué !'
          )
        })
        .catch((error: ErrorMessages) => {
          messages.value = error.message
        })
    }
    if (route.name === 'signin') {
      AuthService.signin(newCredentials)
        .then(() => {
          router.push({ name: 'home' })
        })
        .catch((error: ErrorMessages) => {
          messages.value = error.message
        })
    }
  }
)
</script>
