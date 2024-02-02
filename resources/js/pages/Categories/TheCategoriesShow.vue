<script setup lang="ts">
import { Category, PaginatedData, Uniform } from '@/types/pages'
import ContentLayout from '../Common/layouts/ContentLayout.vue'
import UniformCard from '@/pages/Uniforms/partials/UniformCard.vue'
import CardsWrapper from '../Common/CardsWrapper.vue'
import { DropdownItem } from '@/types/components'
import { computed } from 'vue'
import { useRouteStore } from '@/store/route-store'

interface TheCategoriesShowProps {
  category: Category
  uniforms: PaginatedData<Uniform>
  categories: Category[]
}

const props = defineProps<TheCategoriesShowProps>()
const routeStore = useRouteStore()

const categoryItems = computed(() =>
  props.categories.map<DropdownItem>((category) => ({
    image: category.image.url,
    label: `${category.name} (${category.uniforms_count})`,
    link: { url: route('categories.show', { category: category.slug }) },
    active: routeStore.isCurrent('categories.show', {
      category: category.slug,
    }),
  })),
)
</script>

<template>
  <ContentLayout
    :breadcrumb-paths="[
      { text: 'Categorias', url: route('categories.index') },
      {
        text: category.name,
      },
    ]"
    :pagination="{ ...uniforms.links, ...uniforms.meta }"
  >
    <AppDropdown
      class="mb-3"
      btn-class="btn"
      icon="fas fa-bars"
      label="Categorias"
      :items="categoryItems"
    />

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
