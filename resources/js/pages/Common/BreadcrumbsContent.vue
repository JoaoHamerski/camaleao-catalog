<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

export type BreadcrumbPath = {
  text: string
  url?: string
}

defineProps<{
  paths: BreadcrumbPath[]
}>()
</script>

<template>
  <div>
    <template
      v-for="path in paths"
      :key="path.url"
    >
      <Component
        :is="path.url ? Link : 'span'"
        :href="path.url"
        class="after:content-['>'] after:mx-2 last:after:content-none text-camaleao transition-colors"
        :class="{
          'hover:text-camaleao-darker': path.url,
        }"
      >
        {{ path.text }}
      </Component>
    </template>
  </div>
</template>
