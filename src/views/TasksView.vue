<template>
  <v-layout>
    <v-btn @click="showModal=true"><v-icon icon="mdi-plus"/></v-btn>
    <TasksTable :tasks="tasks" />
    <TaskModal v-model:showModal="showModal" @update:model-value="updateModal"/>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TasksTable from '@/components/tables/TasksTable.vue'
import TaskModal from '@/components/modals/TaskModal.vue'
import TaskService from '@/services/taskService'
import type { Task } from '@/types/task.type'

const tasks = ref()
const filters = ref({
  search: '',
  status: ''
})

const showModal = ref(false)

onMounted(() => {
  getTasks()
})

const getTasks = () => {
  TaskService.getTasks(filters.value).then((datas) => {
    tasks.value = datas
  })
}

const updateModal = (taskForm: Task) => {
  TaskService.addTask(taskForm).then(()=> {
    getTasks()
  })
}
</script>
<style scoped>
.v-layout {
  padding: 86px 20px 20px 20px;
}
</style>
