<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
defineProps<{ title: string }>()
</script>

<template>
  <div class="w-full px-4 lg:px-0 lg:w-1/2 mx-auto">
    <Head :title="title" />
    <div class="mb-3">
      <slot name="header" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
