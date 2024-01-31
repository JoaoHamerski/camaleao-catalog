<script setup lang="ts">
import { Category, PaginatedData, Uniform } from '@/types/pages'
import ContentLayout from '../Common/layouts/ContentLayout.vue'
import UniformCard from '@/pages/Uniforms/partials/UniformCard.vue'
import CardsWrapper from '../Common/CardsWrapper.vue'

defineProps<{ category: Category; uniforms: PaginatedData<Uniform> }>()
</script>

<template>
  <ContentLayout
    :breadcrumb-paths="[
      { text: 'Categorias', url: route('categories.index') },
      {
        text: category.name,
        url: route('categories.show', { category: category.slug }),
      },
    ]"
    :pagination="{ ...uniforms.links, ...uniforms.meta }"
  >
    <template #title> Categorias > {{ category.name }} </template>

    <CardsWrapper>
      <UniformCard
        v-for="uniform in uniforms.data"
        :key="uniform.id"
        :uniform="uniform"
        :category="category"
      />
    </CardsWrapper>
  </ContentLayout>
</template>
