<script setup lang="ts">
import type { Method } from '@inertiajs/core'
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'

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
    class="hover:bg-base-300 active:bg-camaleao cursor-pointer active:text-camaleao-content transition-colors duration-75 block px-4 py-2"
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
