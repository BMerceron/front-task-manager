<template>
  <div class="task-status-section">
    <div class="section-title">
      <p>{{ title }}</p>
    </div>
    <div>
      <TaskCard v-for="task in tasksFiltered" :key="task" :task="task" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCard from '@/components/tables/taskCard.vue'
const props = defineProps({
  tasksFiltered: {
    default: [],
    required: true
  },
  title: String
})
</script>
<style scoped>
.task-status-section {
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 0.5;
  margin-left: 12px;
  padding: 12px;
  border-radius: 10px;
  color: #ffff;
}
</style>
