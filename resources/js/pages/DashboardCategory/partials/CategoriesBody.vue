<script setup lang="ts">
import { Category } from '@/types/pages'
import { ref } from 'vue'
import CategoriesBodyItem from './CategoriesBodyItem.vue'
import CategoryModal from './CategoryModal.vue'
import NoItemsFound from '@/components/NoItemsFound.vue'
import CategoryModalDelete from './CategoryModalDelete.vue'

interface CategoryBodyProps {
  categories: Category[]
}

defineProps<CategoryBodyProps>()

const editCategoryModal = ref({ category: undefined, show: false })
const deleteCategoryModal = ref({ category: undefined, show: false })

const onDeleteCategory = (category: any) => {
  deleteCategoryModal.value.category = category
  deleteCategoryModal.value.show = true
}

const onEditCategory = (category: any) => {
  editCategoryModal.value.category = category
  editCategoryModal.value.show = true
}
</script>

<template>
  <AppCard
    icon="fas fa-shapes"
    label="Categorias"
  >
    <template #content>
      <CategoryModal
        v-model:show="editCategoryModal.show"
        :category="editCategoryModal.category"
      />

      <CategoryModalDelete
        v-model:show="deleteCategoryModal.show"
        :category="deleteCategoryModal.category"
      />

      <NoItemsFound v-if="!categories.length">
        Nenhum item encontrado
      </NoItemsFound>

      <div v-auto-animate>
        <CategoriesBodyItem
          v-for="category in categories"
          :key="category.id"
          :category="category"
          @edit="onEditCategory"
          @delete="onDeleteCategory"
        />
      </div>
    </template>
  </AppCard>
</template>
