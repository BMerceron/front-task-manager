<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title
      data-testId="app-bar-username"
      class="username"
      @click="router.push({ name: 'home' })"
      >{{ username}}</v-app-bar-title
    >

    <template v-slot:append>
      <v-btn icon="mdi-power" @click="disconnect"></v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Accueil"
        value="home"
        @click="router.push({ name: 'home' })"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Tableau de tâches"
        value="table"
        @click="router.push({ name: 'tasks' })"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')

onMounted(() => {
  if (localStorage.username) {
    username.value = localStorage.username
  }
})

const router = useRouter()

const drawer = ref(false)

// Submit Actions
const emit = defineEmits(['disconnect'])
const disconnect = () => {
  emit('disconnect')
}
</script>
<style scoped>
.username:hover {
  cursor: pointer;
}
</style>
