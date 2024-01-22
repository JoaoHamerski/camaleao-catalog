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
      <template
        v-for="category in categories"
        :key="category.id"
      >
        <DCategoryContentItem :category="category" />
        <div class="divider my-2 last:hidden" />
      </template>
    </template>
  </AppCard>
</template>
