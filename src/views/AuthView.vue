<template>
  <Component v-model="credentials" :is="AuthForm" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AuthForm from '../components/forms/AuthForm.vue'
import { signup, signin } from '@/api/auth'
import { useRoute } from 'vue-router'

const route = useRoute()
const credentials = ref({})

watch(
  () => credentials.value,
  (newCredentials) => {
    if (route.name === 'signup') {
      signup(newCredentials)
        .then((res) => {
          console.log('View res signup', res)
        })
        .catch((error) => {
          console.log('View error signup', error)
        })
    }
    if (route.name === 'signin') {
      signin(newCredentials)
        .then((res) => {
          console.log('View res signin', res)
        })
        .catch((error) => {
          console.log('View error signin', error)
        })
    }
  }
)
</script>
