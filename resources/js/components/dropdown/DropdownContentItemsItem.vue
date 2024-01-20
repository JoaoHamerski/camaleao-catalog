<script setup lang="ts">
import { useRouteStore } from '@/store/route-store'
import type { Method } from '@inertiajs/core'
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'

const routeStore = useRouteStore()

export type DropdownItem = {
  label: string
  icon?: string
  link: string
  method?: Method
}

const props = defineProps<DropdownItem>()

const linkAs = computed(() =>
  props.method === undefined || props.method === 'get' ? 'a' : 'span',
)
</script>

<template>
  <Link
    :href="link"
    class="hover:bg-base-300 cursor-pointer transition-colors duration-75 block px-4 py-2"
    :class="
      routeStore.isCurrent('dashboard.*')
        ? 'active:bg-slate-800 active:text-slate-200'
        : 'active:bg-camaleao active:text-camaleao-content'
    "
    :method="method"
    :as="linkAs"
  >
    <FWIcon
      v-if="icon"
      class="mr-2"
      :icon="icon"
    />
    <span>{{ label }}</span>
  </Link>
</template>
