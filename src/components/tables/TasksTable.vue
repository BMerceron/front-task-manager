<template>
  <div class="tasks-table">
    <TasksStatusSection :tasksFiltered="getTasksFiltered(taskStatus.OPEN)" title="A faire" />
    <TasksStatusSection
      :tasksFiltered="getTasksFiltered(taskStatus.IN_PROGRESS)"
      title="En cours"
    />
    <TasksStatusSection :tasksFiltered="getTasksFiltered(taskStatus.DONE)" title="Terminées" />
  </div>
</template>
<script setup lang="ts">
import TasksStatusSection from '@/components/tables/TasksStatusSection.vue'
import { taskStatus } from '@/enums/taskStatus.enum'
import { useDraggable } from '@vueuse/core';

const props = defineProps({
  tasks: {
    type: Array<Object>,
    default: [],
    required: true
  }
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
</script>
<style scoped>
.tasks-table {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
