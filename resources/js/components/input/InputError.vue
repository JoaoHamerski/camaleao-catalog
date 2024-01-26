<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
import { computed } from 'vue'

interface InputErrorProps {
  error?: string
}

const props = defineProps<InputErrorProps>()

const show = computed(() => !!props.error)
</script>

<template>
  <TransitionRoot
    :show="show"
    enter="transition-all duration-500"
    enter-from="max-h-0 opacity-0"
    enter-to="max-h-10 opacity-100"
  >
    <span class="label-text-alt text-error font-semibold">
      {{ error }}
    </span>
  </TransitionRoot>
</template>
