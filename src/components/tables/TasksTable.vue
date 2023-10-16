<template>
  <div></div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import type { Tasks } from '@/types/task.type'

const props = defineProps({
  tasks: {
    type: Tasks,
    default: [],
    required: true
  }
})
</script>
