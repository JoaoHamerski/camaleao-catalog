<script setup lang="ts">
import { Category } from '@/types/pages'
import DCategoryContentItemDropdown from './DCategoryContentItemDropdown.vue'

interface DCategoryContentItem {
  category: Category
}

defineProps<DCategoryContentItem>()
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-4">
      <div>
        <img
          :src="category.image.url"
          class="w-36 rounded"
          alt=""
        />
      </div>
      <div>
        <span class="text-lg font-bold">
          {{ category.name }}
        </span>
      </div>
    </div>

    <DCategoryContentItemDropdown />
  </div>
</template>
