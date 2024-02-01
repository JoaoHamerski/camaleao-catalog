<script setup lang="ts">
import { Menu, MenuButton } from '@headlessui/vue'
import { computed } from 'vue'
import type { AppDropdownProps } from '@/types/components'

import DropdownContentItems from './DropdownContentItems.vue'
import DropdownContentCustom from './DropdownContentCustom.vue'
import DropdownWrapperTransition from './DropdownWrapperTransition.vue'

const ALIGN_CLASSES = {
  left: 'left-0',
  right: 'right-0',
}

const props = withDefaults(defineProps<AppDropdownProps>(), {
  icon: undefined,
  label: undefined,
  btnClass: 'btn btn-ghost',
  items: () => [],
  align: 'left',
})

const dropdownClasses = computed(() => [ALIGN_CLASSES[props.align]])
</script>

<template>
  <Menu
    v-slot="{ close }"
    as="div"
    class="inline-block"
  >
    <MenuButton
      as="button"
      :class="btnClass"
    >
      <FWIcon
        v-if="icon"
        :icon="icon"
      />
      <span v-if="label"> {{ label }}</span>
      <slot name="label" />
    </MenuButton>

    <DropdownWrapperTransition @click.capture="close">
      <DropdownContentCustom
        v-if="$slots['content']"
        :class="dropdownClasses"
      >
        <slot name="content" />
      </DropdownContentCustom>

      <DropdownContentItems
        v-else
        :items="items"
        :class="dropdownClasses"
      />
    </DropdownWrapperTransition>
  </Menu>
</template>
