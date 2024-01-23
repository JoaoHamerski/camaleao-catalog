<script setup lang="ts">
import type { Method } from '@inertiajs/core'
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'

export type DropdownItem = {
  label: string
  icon?: string
  onclick?: () => void
  link?: {
    url: string
    method?: Method
  }
}

const props = defineProps<DropdownItem>()

const isMethodGet = computed(
  () => props.link?.method === undefined || props.link?.method === 'get',
)

const linkAs = computed(() => (isMethodGet.value ? 'a' : 'span'))

const componentIs = computed(() => (props.onclick ? 'button' : Link))

const attributes = computed(() =>
  componentIs.value === Link
    ? {
        method: props.link?.method,
        as: linkAs.value,
        href: props.link?.url,
      }
    : {
        onClick: props.onclick,
        class: 'w-full text-left',
      },
)
</script>

<template>
  <Component
    :is="componentIs"
    class="block text-sm px-4 py-2 cursor-pointer transition-colors duration-75 hover:bg-base-300 active:bg-primary active:text-primary-content"
    v-bind="attributes"
  >
    <FWIcon
      v-if="icon"
      class="mr-2"
      :icon="icon"
    />
    <span>{{ label }}</span>
  </Component>
</template>
