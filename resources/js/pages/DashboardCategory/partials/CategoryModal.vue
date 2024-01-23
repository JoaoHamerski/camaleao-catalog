<script setup lang="ts">
import { Category } from '@/types/pages'
import { computed } from 'vue'
import CategoryForm from './CategoryForm.vue'
import DashboardFormModal from '@/pages/Shared/DashboardFormModal.vue'

interface CategoryModal {
  category?: Category
}

const props = defineProps<CategoryModal>()

const isEdit = computed(() => !!props.category)
</script>

<template>
  <DashboardFormModal
    :is-edit="isEdit"
    :labels="{ create: 'Cadastre uma categoria', edit: 'Altere a categoria' }"
  >
    <CategoryForm
      :is-edit="isEdit"
      :category="category"
    />
  </DashboardFormModal>
</template>
