<script setup lang="ts">
import { Category } from '@/types/pages'
import DashboardListItem from '@/pages/Shared/dashboard/DashboardListItem.vue'
import { DropdownItem } from '@/types/components'

interface CategoriesBodyItem {
  category: Category
}

const emit = defineEmits(['edit', 'delete'])
const props = defineProps<CategoriesBodyItem>()

const onEdit = () => {
  emit('edit', props.category)
}

const onDelete = () => {
  emit('delete', props.category)
}

const options: DropdownItem[] = [
  { label: 'Editar', icon: 'fas fa-edit', onclick: onEdit },
  { label: 'Excluir', icon: 'fas fa-trash', onclick: onDelete },
]
</script>

<template>
  <DashboardListItem :options="options">
    <div>
      <img
        :src="category.image.url"
        class="w-36 rounded"
        alt=""
      />
    </div>
    <div>
      <span class="text-xl font-bold">
        {{ category.name }}
      </span>
    </div>
  </DashboardListItem>
</template>
