<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from '@/types'
import DashboardCategoryModalNew from './partials/DashboardCategoryModalNew.vue'
import DashboardCategoryContent from './partials/DashboardCategoryContent.vue'

type Category = {
  name: string
}

interface CategoryResult extends Pagination {
  data: Category[]
}

interface TheDashboardCategoriesProps {
  categories: CategoryResult
}

defineProps<TheDashboardCategoriesProps>()

const categoryModalShow = ref(false)

const openModal = () => {
  categoryModalShow.value = true
}
</script>

<template>
  <div class="w-1/2 mx-auto mt-5">
    <div class="mb-3">
      <AppButton
        icon="fas fa-plus"
        class="btn-success rounded-md"
        label="Nova categoria"
        @click.prevent="openModal"
      />
    </div>

    <AppCard
      icon="fas fa-shapes"
      label="Categorias"
    >
      <template #content>
        <DashboardCategoryContent />
      </template>
    </AppCard>

    <DashboardCategoryModalNew v-model:show="categoryModalShow" />
  </div>
</template>
