<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
import { computed } from 'vue'

interface InputErrorProps {
  message?: string
}

const props = defineProps<InputErrorProps>()

const showError = computed(() => !!props.message)
</script>

<template>
  <TransitionRoot
    :show="showError"
    enter="transition-all duration-500"
    enter-from="max-h-0 opacity-0"
    enter-to="max-h-20 opacity-100"
  >
    <span class="label-text-alt text-error font-semibold">
      {{ message }}
    </span>
  </TransitionRoot>
</template>
