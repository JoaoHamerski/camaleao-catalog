<script setup lang="ts">
import { ref } from 'vue'
// import type { CategoryData } from '@/types/pages/category'

// import DCategoryModalCreate from './partials/DCategoryModalCreate.vue'
// import DCategoryContent from './partials/DCategoryContent.vue'

interface TheDashboardCategoriesProps {
  // categories: CategoryData
}

defineProps<TheDashboardCategoriesProps>()

const uniformCreateModal = ref(false)

const openModal = () => {
  uniformCreateModal.value = true
}
</script>

<template>
  <div class="w-1/2 mx-auto">
    <div class="mb-3">
      <AppButton
        icon="fas fa-plus"
        class="btn-success rounded-md"
        label="Nova categoria"
        @click.prevent="openModal"
      />
    </div>
  </div>
</template>
