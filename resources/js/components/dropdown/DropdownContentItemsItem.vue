<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import type { DropdownItem } from '@/types/components'

const props = defineProps<DropdownItem>()

const isMethodGet = computed(
  () => props.link?.method === undefined || props.link?.method === 'get',
)

const linkRenderAs = computed(() => (isMethodGet.value ? 'a' : 'span'))

const componentIs = computed(() => (props.onclick ? 'button' : Link))

const attributes = computed(() =>
  componentIs.value === Link
    ? {
        method: props.link?.method,
        as: linkRenderAs.value,
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
    class="flex gap-2 items-center text-sm px-4 py-2 cursor-pointer transition-colors duration-75 hover:bg-base-300 hover:text-base-content active:bg-primary active:text-primary-content"
    :class="{
      'bg-primary hover:bg-primary-content text-white font-bold': active,
    }"
    v-bind="attributes"
  >
    <img
      :src="image"
      class="w-8 rounded-lg"
    />
    <FWIcon
      v-if="icon"
      class="mr-2"
      :icon="icon"
    />
    <span>{{ label }}</span>
  </Component>
</template>
