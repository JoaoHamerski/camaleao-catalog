<script setup lang="ts">
import { useToastStore } from '@/store/toast-store'
import { computed } from 'vue'

import ToastAlert from './ToastAlert.vue'

const toastStore = useToastStore()

const toasts = computed(() => toastStore.toasts)
</script>

<template>
  <TransitionGroup
    tag="div"
    class="absolute flex flex-col flex-col-reverse gap-4 bottom-2 right-0 left-0 z-50 min-w-60 max-w-80 mx-auto overflow-hidden"
    name="toast"
  >
    <ToastAlert
      v-for="toast in toasts"
      :key="toast.id"
      :type="toast.type"
      :message="toast.message"
    />
  </TransitionGroup>
</template>

<style>
.toast-move,
.toast-enter-active,
.toast-leave-active {
  @apply transition-all;
}

.toast-enter-from,
.toast-leave-to {
  @apply opacity-0 scale-75;
}
</style>
