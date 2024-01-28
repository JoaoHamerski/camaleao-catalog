<script setup lang="ts">
import type { SidebarDrawerListProps } from '@/types/components'
import SidebarDrawerListItem from './SidebarDrawerListItem.vue'
defineProps<SidebarDrawerListProps>()
</script>

<template>
  <ul class="px-0 py-4 w-80 min-h-full bg-slate-800 text-slate-200">
    <li v-if="$slots['header']">
      <slot name="header" />
    </li>
    <SidebarDrawerListItem
      v-for="item in items"
      :key="item.label"
      v-bind="item"
    />
  </ul>
</template>
