<script setup lang="ts">
import { Category } from '@/types/pages'

interface DCategoryContentItem {
  category: Category
}

defineProps<DCategoryContentItem>()
</script>

<template>
  <div class="flex gap-4">
    <div>
      <img
        :src="category.image.url"
        class="w-40 rounded"
        alt=""
      />
    </div>
    <div>
      <span class="text-lg font-bold">
        {{ category.name }}
      </span>
    </div>
  </div>
</template>
