<script setup lang="ts">
import { ref } from 'vue'
import type { CategoryPaginated } from '@/types/pages/category'
import CategoriesBody from './partials/CategoriesBody.vue'
import CategoryModal from './partials/CategoryModal.vue'
import DashboardContentLayout from '../Shared/layouts/DashboardContentLayout.vue'

interface TheDashboardCategoriesProps {
  categories: CategoryPaginated
}

defineProps<TheDashboardCategoriesProps>()

const categoryCreateModal = ref(false)

const openModal = () => {
  categoryCreateModal.value = true
}
</script>

<template>
  <DashboardContentLayout>
    <template #header>
      <AppButton
        icon="fas fa-plus"
        class="btn-success rounded-md"
        label="Nova categoria"
        @click.prevent="openModal"
      />
    </template>

    <CategoryModal v-model:show="categoryCreateModal" />
    <CategoriesBody :categories="categories.data" />

    <div class="mt-10 text-center">
      <AppPagination
        :pagination="{ ...categories.links, ...categories.meta }"
      />
    </div>
  </DashboardContentLayout>
</template>
