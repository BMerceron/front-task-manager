<template>
  <v-layout>
    <v-btn @click="showModal=true">
      <v-icon icon="mdi-plus"/>
    </v-btn>
    <TasksTable 
      :tasks="tasks" 
      @update:model-value="updateTask"
      @delete-task="deleteTask"
    />
    <TaskModal 
      v-model:showModal="showModal" 
      v-model:modal-context="modalContext" 
      @update:model-value="createTask"
    />
  </v-layout>
</template>

<script setup lang="ts">
import { ref,reactive, onMounted } from 'vue'
import TasksTable from '@/components/tables/TasksTable.vue'
import TaskModal from '@/components/modals/TaskModal.vue'
import TaskService from '@/services/taskService'
import type { Task } from '@/types/task.type'
import { taskContexts } from '@/enums/taskContexts.enum'
import type { ErrorMessages } from '@/types/errors.type'

const tasks = ref()
const filters = ref({
  search: '',
  status: ''
})

const showModal = ref(false)
const modalContext = reactive({
  context : taskContexts.CREATE,
  task: {}
})
const messages = ref()

onMounted(() => {
  getTasks()
})

const getTasks = () => {
  TaskService.getTasks(filters.value).then((datas) => {
    tasks.value = datas
  })
}

const createTask = (taskForm: Task) => {
  TaskService.addTask(taskForm).then(()=> {
    getTasks()
  })
  .catch((error: ErrorMessages) => {
    messages.value = error.message
  })
}

const updateTask = (taskForm: Task) => {
  TaskService.updateTask(taskForm).then(() => {
    getTasks()
  })
  .catch((error: ErrorMessages) => {
    messages.value = error.message
  })
}

const deleteTask = (taskId: string) => {
  TaskService.deleteTask(taskId).then(() => {
    getTasks()
  })
  .catch((error: ErrorMessages) => {
    messages.value = error.message
  })
}
</script>
<style scoped>
.v-layout {
  padding: 86px 20px 20px 20px;
}
</style>
