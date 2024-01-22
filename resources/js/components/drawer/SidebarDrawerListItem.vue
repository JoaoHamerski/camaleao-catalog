<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

export type SidebarDrawerItemProps = {
  label: string
  icon: string
  url: string
  active: boolean
}

defineProps<SidebarDrawerItemProps>()
</script>

<template>
  <li :key="label">
    <Link
      :href="url"
      class="px-5 py-3 rounded-none hover:bg-slate-700 block transition-colors"
      :class="{
        'font-bold text-white bg-slate-600': active,
      }"
    >
      <FWIcon
        fixed-width
        :icon="icon"
        class="mr-3"
      />
      <span>{{ label }}</span>
    </Link>
  </li>
</template>
