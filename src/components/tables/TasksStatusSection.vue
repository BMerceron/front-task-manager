<template>
  <div class="task-status-section">
    <div class="section-title">
      <p>{{ title }}</p>
    </div>
    <div>
      <TaskCard 
        v-for="task in tasksFiltered" 
        :key="task" :task="task" 
        :showModal="showModal"
        @update:show-modal="showUpdateModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import TaskCard from '@/components/tables/TaskCard.vue';
import type { Task } from '@/types/task.type';

const props = defineProps({
  tasksFiltered: {
    default: [],
    required: true
  },
  showModal: {
    type: Boolean
  },
  title: String
})

const showModal = ref(props.showModal)

const emit = defineEmits(['update:showModal'])

const showUpdateModal = (taskToUpdate: Task) => {
  emit('update:showModal', taskToUpdate)
}
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
