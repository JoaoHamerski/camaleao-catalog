<script setup lang="ts">
import { Category } from '@/types/pages'
import { ref } from 'vue'
import CategoriesBodyItem from './CategoriesBodyItem.vue'
import CategoryModal from './CategoryModal.vue'

interface DCategoryContentProps {
  categories: Category[]
}

defineProps<DCategoryContentProps>()

const editModal = ref({ category: undefined, show: false })

const onEditCategory = (category: any) => {
  editModal.value.category = category
  editModal.value.show = true
}
</script>

<template>
  <AppCard
    icon="fas fa-shapes"
    label="Categorias"
  >
    <template #content>
      <CategoryModal
        v-model:show="editModal.show"
        :category="editModal.category"
      />

      <template
        v-for="category in categories"
        :key="category.id"
      >
        <CategoriesBodyItem
          :category="category"
          @edit="onEditCategory"
        />
        <div class="divider my-2 last:hidden" />
      </template>
    </template>
  </AppCard>
</template>
