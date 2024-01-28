<script setup lang="ts">
import { MenuItems, MenuItem } from '@headlessui/vue'
</script>

<template>
  <MenuItems
    as="div"
    class="absolute shadow-lg py-3 bg-base-100 rounded-lg w-52 flex flex-col gap-1 z-10"
  >
    <MenuItem as="div">
      <slot />
    </MenuItem>
  </MenuItems>
</template>
