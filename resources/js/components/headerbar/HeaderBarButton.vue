<script setup lang="ts">
import { useRouteStore } from '@/store/route-store'

const routeStore = useRouteStore()
</script>

<template>
  <AppButton
    class="btn-ghost text-white text-sm min-h-10 h-10"
    :class="
      routeStore.isCurrent('dashboard.*')
        ? 'hover:bg-white/20'
        : 'hover:bg-black/20'
    "
  />
</template>
