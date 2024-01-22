<script setup lang="ts">
import { Category } from '@/types/pages'

interface DCategoryContentItem {
  category: Category
}

defineProps<DCategoryContentItem>()
</script>

<template>
  <div>
    <div>
      <img
        :src="category.image"
        alt=""
      />
    </div>
  </div>
</template>
