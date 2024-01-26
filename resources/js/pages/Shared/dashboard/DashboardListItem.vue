<script setup lang="ts">
import type { DropdownItem } from '@/types/components'

interface DashboardListItemProps {
  options?: DropdownItem[]
}

defineProps<DashboardListItemProps>()
</script>

<template>
  <div class="group">
    <div class="flex justify-between">
      <div class="flex gap-4">
        <slot />
      </div>

      <AppDropdown
        v-if="options"
        btn-class="btn btn-ghost btn-sm rounded-full w-10 h-10"
        icon="fas fa-ellipsis"
        :items="options"
        align="right"
      />
    </div>
    <div class="divider group-last:hidden" />
  </div>
</template>
