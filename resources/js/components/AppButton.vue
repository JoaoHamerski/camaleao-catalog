<script setup lang="ts">
interface AppButtonProps {
  label?: string
  icon?: string
}

defineProps<AppButtonProps>()
</script>

<template>
  <button class="btn">
    <FWIcon
      v-if="icon"
      :icon="icon"
      fixed-width
    />
    <span v-if="label">{{ label }}</span>
  </button>
</template>
