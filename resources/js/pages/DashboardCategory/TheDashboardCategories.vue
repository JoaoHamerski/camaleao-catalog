<script setup lang="ts">
import { ref } from 'vue'
import CategoriesBody from './partials/CategoriesBody.vue'
import CategoryModal from './partials/CategoryModal.vue'
import DashboardContentLayout from '../Common/layouts/DashboardContentLayout.vue'
import { PaginatedData, Category } from '@/types/pages'

interface TheDashboardCategoriesProps {
  categories: PaginatedData<Category>
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
