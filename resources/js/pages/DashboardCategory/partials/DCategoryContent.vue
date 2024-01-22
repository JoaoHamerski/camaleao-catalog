<script setup lang="ts">
import { Category } from '@/types/pages'
import DCategoryContentItem from './DCategoryContentItem.vue'

interface DCategoryContentProps {
  categories: Category[]
}

defineProps<DCategoryContentProps>()
</script>

<template>
  <AppCard
    icon="fas fa-shapes"
    label="Categorias"
  >
    <template #content>
      <DCategoryContentItem
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </template>
  </AppCard>
</template>
