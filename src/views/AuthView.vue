<template>
  <AuthForm v-model="credentials" :messages="messages" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AuthForm from '../components/forms/AuthForm.vue'
import { signup, signin } from '@/api/auth'
import { useRoute, useRouter } from 'vue-router'
import { useAlertStore } from '@/stores/notificationAlert'
import { useUserProfilStore } from '@/stores/userProfil'

const route = useRoute()
const router = useRouter()
const credentials = ref({})
const alert = useAlertStore()
const user = useUserProfilStore()
let messages = ref()

watch(
  () => credentials.value,
  (newCredentials: any) => {
    if (route.name === 'signup') {
      signup(newCredentials)
        .then(() => {
          user.setUser(newCredentials.username)
          router.push({ name: 'home' })
          alert.alertSuccess(
            'Création de compte réussie',
            'Vous pouvez désormais vous connecter avec vos identifiants. Bien joué !'
          )
        })
        .catch((error) => {
          messages.value = error.message
        })
    }
    if (route.name === 'signin') {
      signin(newCredentials)
        .then(() => {
          user.setUser(newCredentials.username)
          router.push({ name: 'home' })
        })
        .catch((error) => {
          messages.value = error.message
        })
    }
  }
)
</script>
