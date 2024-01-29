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
  <DashboardListItem
    :options="options"
    class="flex gap-4"
  >
    <div class="w-40">
      <AppCarousel
        :src-slides="[category.image.url]"
        img-class="w-full h-32 object-cover"
        carousel-class="rounded-lg shadow-xl"
      />
    </div>
    <div>
      <div class="text-xl font-bold">{{ category.name }}</div>
      <div class="badge badge-primary">
        <FWIcon
          icon="fas fa-tshirt"
          size="xs"
          fixed-width
          class="mr-1"
        />
        <span class="font-bold">{{ category.uniforms_count }}</span>
      </div>
    </div>
  </DashboardListItem>
</template>
