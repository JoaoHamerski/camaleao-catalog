<script setup lang="ts">
import { CategoryPaginated } from '@/types/pages'
import ContentLayout from '@/pages/Common/layouts/ContentLayout.vue'
import CategoryCard from './partials/CategoryCard.vue'
import NoItemsFound from '@/components/NoItemsFound.vue'

defineProps<{ categories: CategoryPaginated }>()
</script>

<template>
  <ContentLayout>
    <template #title> Categorias </template>

    <NoItemsFound v-if="!categories.data.length">
      Nenhuma categoria encontrada
    </NoItemsFound>

    <div class="grid grid-cols-6 gap-5">
      <CategoryCard
        v-for="category in categories.data"
        :key="category.id"
        :category="category"
      />
    </div>

    <div class="text-center mt-10">
      <AppPagination
        :pagination="{ ...categories.meta, ...categories.links }"
      />
    </div>
  </ContentLayout>
</template>
