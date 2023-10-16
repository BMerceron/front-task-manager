<template>
  <v-layout> <TasksTable :tasks="tasks" /></v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TasksTable from '@/components/tables/TasksTable.vue'
import TaskService from '@/services/taskService'

const tasks = ref()
const filters = ref({
  search: 'cd',
  status: 'cd'
})

onMounted(() => {
  TaskService.getTasks(filters.value).then((datas) => {
    tasks.value = datas
  })
})
</script>
<style scoped>
.v-layout {
  padding: 72px 20px 20px 20px;
}
</style>
