<script setup lang="ts">
interface AppButtonProps {
  label?: string
  icon?: string
  loading?: boolean
}

defineProps<AppButtonProps>()
</script>

<template>
  <button class="btn">
    <span
      v-if="loading"
      class="loading loading-spinner"
    />
    <FWIcon
      v-else-if="icon"
      :icon="icon"
      fixed-width
    />
    <span v-if="label">{{ label }}</span>
  </button>
</template>
