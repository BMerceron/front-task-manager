<template>
  <div class="task-card">
    <div class="task-title-container">
      <div class="task-title">{{ task.title }}</div>
      <div class="task-icon-edit">
        <v-btn @click="showUpdateModal">
          <v-icon icon="mdi-pencil" />
        </v-btn>
      </div>
    </div>
    <div class="task-description">{{ task.description }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const props = defineProps({
  task: {
    type: Object,
    required: true
  },
  showModal: {
    type: Boolean
  },
  title: String
})

const emit = defineEmits(['update:showModal'])

const showUpdateModal = () => {
  emit('update:showModal', props.task)
}
</script>

<style scoped>
.task-card {
  margin-top: 12px;
  padding: 12px;
  background-color: #121212;
  border-radius: 10px;
  cursor: grab;
}
.task-title-container {
  display: flex;
  width: 100%
}
.task-title {
  font-size: 18px;
  font-weight: 800;
  align-self: stretch;
}
.task-icon-edit {
  margin-left: auto;
  font-size: 12px;
  cursor: pointer;
}
</style>
