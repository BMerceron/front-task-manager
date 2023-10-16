<template>
  <FloatingSquares></FloatingSquares>
  <v-layout>
    <h1>Bonjour {{ user.username }}, que voulez vous faire aujourd'hui ?</h1>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FloatingSquares from '@/components/animations/FloatingSquares.vue'

let user = ref({
  username: ''
})

onMounted(() => {
  if (localStorage.username) {
    user.value.username = localStorage.username
  }
})
</script>

<style scoped>
.v-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 20px 20px 20px;
}
</style>
