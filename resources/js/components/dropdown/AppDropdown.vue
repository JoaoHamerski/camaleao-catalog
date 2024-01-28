<script setup lang="ts">
import { Menu, MenuButton } from '@headlessui/vue'
import { computed } from 'vue'
import type { AppDropdownProps } from '@/types/components'

import DropdownContentItems from './DropdownContentItems.vue'
import DropdownContentCustom from './DropdownContentCustom.vue'
import DropdownTransitionWrapper from './DropdownTransitionWrapper.vue'

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
    as="div"
    class="inline-block"
  >
    <MenuButton
      as="button"
      :class="btnClass"
    >
      <template v-if="label">{{ label }}</template>
      <FWIcon
        v-else-if="icon"
        :icon="icon"
      />
      <template v-else>
        <slot name="label" />
      </template>
    </MenuButton>

    <DropdownTransitionWrapper>
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
    </DropdownTransitionWrapper>
  </Menu>
</template>
