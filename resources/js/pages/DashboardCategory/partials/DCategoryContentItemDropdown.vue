<script setup lang="ts">
import { DropdownItem } from '@/components/dropdown/DropdownContentItemsItem.vue'

const DROPDOWN_ITEMS: DropdownItem[] = [
  {
    label: 'Editar',
    icon: 'fas fa-edit',
    onclick: () => {
      console.log('editar')
    },
  },
  {
    label: 'Excluir',
    icon: 'fas fa-trash',
    onclick: () => {
      console.log('excluir')
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
