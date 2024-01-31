<script setup lang="ts">
import type { Category, PaginatedData } from '@/types/pages'
import ContentLayout from '@/pages/Common/layouts/ContentLayout.vue'
import CategoryCard from './partials/CategoryCard.vue'
import NoItemsFound from '@/components/NoItemsFound.vue'
import CardsWrapper from '../Common/CardsWrapper.vue'
import { computed } from 'vue'

const props = defineProps<{ categories: PaginatedData<Category> }>()

const hasCategories = computed(() => !!props.categories.data.length)
</script>

<template>
  <ContentLayout
    :breadcrumb-paths="[{ text: 'Categorias' }]"
    :pagination="{ ...categories.links, ...categories.meta }"
  >
    <NoItemsFound v-if="!hasCategories">
      Nenhuma categoria encontrada
    </NoItemsFound>

    <CardsWrapper v-else>
      <CategoryCard
        v-for="category in categories.data"
        :key="category.id"
        :category="category"
      />
    </CardsWrapper>
  </ContentLayout>
</template>
