<template>
  <div class="tasks-table">
    <TasksStatusSection 
      :tasksFiltered="getTasksFiltered(taskStatus.OPEN)"
      v-model:showModal="showModal"
      @update:show-modal="showUpdateModal"
      title="A faire" />
    <TasksStatusSection
      :tasksFiltered="getTasksFiltered(taskStatus.IN_PROGRESS)"
      v-model:showModal="showModal"
      @update:show-modal="showUpdateModal"
      title="En cours"
    />
    <TasksStatusSection 
      :tasksFiltered="getTasksFiltered(taskStatus.DONE)"
      v-model:showModal="showModal"
      @update:show-modal="showUpdateModal"
      title="Terminées" 
    />
    <TaskModal 
      v-model:showModal="showModal" 
      v-model:modal-context="modalContext" 
      @update:model-value="updateTask"
      @delete-task="deleteTask"
    />
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref, reactive } from 'vue';
import TasksStatusSection from '@/components/tables/TasksStatusSection.vue'
import { taskStatus } from '@/enums/taskStatus.enum'
import TaskModal from '../modals/TaskModal.vue';
import { taskContexts } from '@/enums/taskContexts.enum'
import type { Task } from '@/types/task.type'

const props = defineProps({
  tasks: {
    type: Array<Object>,
    default: [],
    required: true
  },
})

const showModal = ref(false)
const modalContext = reactive({
  context : taskContexts.UPDATE,
  task: {}
})

const getTasksFiltered = (status: string) => {
  const allTasks = props.tasks
  const tasksFilteredByStatus: any = []
  allTasks.forEach((task: any) => {
    if (task.status === status) {
      tasksFilteredByStatus.push(task)
    }
  })
  return tasksFilteredByStatus
}

const showUpdateModal = (task: Task) => {
  modalContext.task = task
  showModal.value=true
}

const emit = defineEmits(['update:modelValue', 'deleteTask'])

const updateTask = (taskToUpdate: Task) => {
  emit('update:modelValue', taskToUpdate)
}

const deleteTask = (taskId: string) => {
  emit('deleteTask', taskId)
}
</script>
<style scoped>
.tasks-table {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
