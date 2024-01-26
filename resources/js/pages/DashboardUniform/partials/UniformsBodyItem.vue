<script setup lang="ts">
import DashboardListItem from '@/pages/Shared/dashboard/DashboardListItem.vue'
import { DropdownItem } from '@/types/components'
import { Uniform } from '@/types/pages'

interface UniformsBodyItemProps {
  uniform: Uniform
}

const emit = defineEmits(['edit', 'delete'])
const props = defineProps<UniformsBodyItemProps>()

const onEdit = () => {
  emit('edit', props.uniform)
}

const onDelete = () => {
  emit('delete', props.uniform)
}

const options: DropdownItem[] = [
  { label: 'Editar', icon: 'fas fa-edit', onclick: onEdit },
  { label: 'Excluir', icon: 'fas fa-trash', onclick: onDelete },
]
</script>

<template>
  <DashboardListItem :options="options">
    <div>
      {{ uniform.name }}
    </div>
  </DashboardListItem>
</template>
