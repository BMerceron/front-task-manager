<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title data-testId="app-bar-username">{{ user?.username }}</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-power" @click="disconnect"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const props = defineProps({
  user: {
    type: Object
  }
})

// Submit Actions
const emit = defineEmits(['disconnect'])
const disconnect = () => {
  emit('disconnect')
}
</script>
<style scoped></style>
