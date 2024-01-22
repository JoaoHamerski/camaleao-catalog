<script setup lang="ts">
interface AppCardProps {
  icon?: string
  label?: string
}

defineProps<AppCardProps>()
</script>

<template>
  <div class="shadow-lg rounded">
    <div class="p-4 bg-camaleao rounded-t text-white font-bold">
      <slot
        v-if="$slots['title']"
        name="title"
      />
      <template v-else>
        <FWIcon
          v-if="icon"
          class="mr-2"
          fixed-width
          :icon="icon"
        />
        <span v-if="label">
          {{ label }}
        </span>
      </template>
    </div>

    <div class="p-3 bg-white rounded-b">
      <slot name="content" />
    </div>
  </div>
</template>
