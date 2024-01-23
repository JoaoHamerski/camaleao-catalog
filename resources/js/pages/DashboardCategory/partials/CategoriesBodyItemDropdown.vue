<script setup lang="ts">
import { DropdownItem } from '@/components/dropdown/DropdownContentItemsItem.vue'

const emit = defineEmits(['edit', 'delete'])

const DROPDOWN_ITEMS: DropdownItem[] = [
  {
    label: 'Editar',
    icon: 'fas fa-edit',
    onclick: () => {
      emit('edit')
    },
  },
  {
    label: 'Excluir',
    icon: 'fas fa-trash',
    onclick: () => {
      emit('delete')
    },
  },
]
</script>

<template>
  <AppDropdown
    btn-class="btn btn-ghost btn-sm rounded-full w-10 h-10"
    icon="fas fa-ellipsis"
    :items="DROPDOWN_ITEMS"
    align="right"
  />
</template>
