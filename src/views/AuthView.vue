<template>
  <AuthForm v-model="credentials" :messages="messages" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AuthForm from '../components/forms/AuthForm.vue'
import { signup, signin } from '@/api/auth'
import { useRoute, useRouter } from 'vue-router'
import { useAlertStore } from '@/stores/notificationAlert'

const route = useRoute()
const router = useRouter()
const credentials = ref({})
const alert = useAlertStore()
let messages = ref()

watch(
  () => credentials.value,
  (newCredentials) => {
    if (route.name === 'signup') {
      signup(newCredentials)
        .then(() => {
          router.push({ name: 'home' })
          alert.alertSuccess(
            'Création de compte réussie',
            'Vous pouvez désormais vous connecter avec vos identifiants. Bien joué !'
          )
        })
        .catch((error) => {
          console.log(error)
          messages.value = error.message
        })
    }
    if (route.name === 'signin') {
      signin(newCredentials)
        .then((res) => {
          router.push({ name: 'home' })
          console.log(res)
          alert.alertSuccess(
            'Connection réussie',
            'Vous être maintenant connecté à votre compte. Bien joué !'
          )
        })
        .catch((error) => {
          alert.alertError('Erreur', 'Le mot de passe ou le pseudo sont inccorects.')
        })
    }
  }
)
</script>
