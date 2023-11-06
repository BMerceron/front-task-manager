<template>
  <Transition name="bounce">
    <v-alert
      v-if="modelValue.enable"
      class="notification-alert"
      closable
      :title="modelValue.title"
      :text="modelValue.text"
      :type="modelValue.type"
      @click:close="handleCloseAlert"
    />
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

// Submit Actions
const emit = defineEmits(['close'])

const handleCloseAlert = () => {
  emit('close')
}
</script>

<style>
.notification-alert {
  position: absolute;
  z-index: 999;
  left: 25%;
  right: 25%;
  bottom: 20px;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
