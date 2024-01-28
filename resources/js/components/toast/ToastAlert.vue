<script setup lang="ts">
import type { ToastType } from '@/types/store'
import { computed } from 'vue'

const TOAST_TYPES_MAP: Record<ToastType, { icon: string }> = {
  success: {
    icon: 'fas fa-check-circle',
  },
  error: {
    icon: 'fas fa-circle-xmark',
  },
  info: {
    icon: 'fas fa-circle-exclamation',
  },
}

type ToastAlertTypes = {
  type: ToastType
  message: String
}

const props = defineProps<ToastAlertTypes>()
const toastProps = computed(() => TOAST_TYPES_MAP[props.type])
</script>

<template>
  <div
    class="alert shadow-xl rounded-full flex flex-nowrap bg-gray-800 text-white border-gray-800"
  >
    <FWIcon
      class="text-white"
      :icon="toastProps.icon"
      size="xl"
    />
    <span class="text-sm">{{ message }}</span>
  </div>
</template>
