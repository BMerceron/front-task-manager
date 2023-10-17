<template>
  <div class="task-card">
    <div>{{ task.title }}</div>
    <div>{{ task.description }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  task: {
    type: Object,
    required: true
  },
  title: String
})
</script>

<style scoped>
.task-card {
  padding: 12px;
  background-color: #121212;
}
</style>
