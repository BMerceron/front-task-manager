<template>
  <Component v-model="credentials" :is="AuthForm" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AuthForm from '../components/forms/AuthForm.vue'

const credentials = ref({})

watch(
  () => credentials.value,
  (newCredentials) => {
    console.log(newCredentials)
  }
)
</script>
