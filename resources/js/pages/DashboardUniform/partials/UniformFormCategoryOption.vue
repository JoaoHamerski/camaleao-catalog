<script setup lang="ts">
import { Category } from '@/types/pages'

defineProps<{ item: Category }>()
</script>
<template>
  <div class="flex items-center gap-4">
    <div class="w-12">
      <img
        class="rounded max-h-20"
        :src="item.image.url"
        alt=""
      />
    </div>
    <div>
      {{ item.name }}
    </div>
  </div>
</template>
