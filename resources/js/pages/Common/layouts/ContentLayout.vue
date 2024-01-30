<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
defineProps<{ title: string }>()
</script>

<template>
  <div class="md:px-20 px-4 mt-16">
    <Head :title="title" />
    <div
      v-if="$slots['title']"
      class="divider divider-start text-camaleao md:text-3xl font-bold mb-10"
    >
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
