<script setup lang="ts">
import { MenuItem, MenuItems } from '@headlessui/vue'
import DropdownContentItemsItem from './DropdownContentItemsItem.vue'
import type { DropdownItem } from '@/types/components'

interface DropdownContentItemsProps {
  items: DropdownItem[]
}

defineProps<DropdownContentItemsProps>()
</script>

<template>
  <MenuItems
    class="absolute shadow-lg py-3 bg-base-100 rounded-lg w-52 flex flex-col gap-1 z-10 max-h-52 scrollbar-thin overflow-auto"
    as="ul"
  >
    <MenuItem
      v-for="item in items"
      v-slot="{ close }"
      :key="item.label"
      as="li"
    >
      <DropdownContentItemsItem
        v-bind="item"
        @click.capture="close"
      />
    </MenuItem>
  </MenuItems>
</template>
