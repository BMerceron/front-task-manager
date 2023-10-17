<template>
  <v-layout>
    <v-btn><v-icon icon="mdi-plus" /></v-btn>
    <TasksTable :tasks="tasks" />
  </v-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TasksTable from '@/components/tables/TasksTable.vue'
import TaskService from '@/services/taskService'

const tasks = ref()
const filters = ref({
  search: 'c',
  status: 'v'
})

onMounted(() => {
  TaskService.getTasks(filters.value).then((datas) => {
    tasks.value = datas
  })
})
</script>
<style scoped>
.v-layout {
  padding: 86px 20px 20px 20px;
}
</style>
