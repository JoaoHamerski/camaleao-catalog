<script setup lang="ts">
import SidebarDrawerListItem, {
  type SidebarDrawerItemProps,
} from './SidebarDrawerListItem.vue'

interface SidebarDrawerListProps {
  items: SidebarDrawerItemProps[]
}

defineProps<SidebarDrawerListProps>()
</script>

<template>
  <ul class="px-0 py-4 w-80 min-h-full bg-slate-800 text-slate-200">
    <li v-if="$slots['header-item']">
      <slot name="header-item" />
    </li>
    <SidebarDrawerListItem
      v-for="item in items"
      :key="item.label"
      v-bind="item"
    />
  </ul>
</template>
