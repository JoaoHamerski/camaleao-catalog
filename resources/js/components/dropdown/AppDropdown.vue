<script setup lang="ts">
import { Menu, MenuButton, TransitionRoot } from '@headlessui/vue'
import { computed } from 'vue'
import { type DropdownItem } from './DropdownContentItemsItem.vue'

import DropdownContentItems from './DropdownContentItems.vue'
import DropdownContentCustom from './DropdownContentCustom.vue'

interface AppDropdownProps {
  label?: string
  btnClass?: string
  items?: DropdownItem[]
  align?: 'left' | 'right'
}

const ALIGN_CLASSES_MAP = {
  left: 'left-0',
  right: 'right-0',
}

const props = withDefaults(defineProps<AppDropdownProps>(), {
  label: '',
  btnClass: 'btn btn-ghost',
  items: () => [],
  align: 'left',
  closeOnClick: false,
})

const alignClass = computed(() => ALIGN_CLASSES_MAP[props.align])
</script>

<template>
  <Menu
    as="div"
    class="relative inline-block"
  >
    <MenuButton
      as="button"
      :class="btnClass"
    >
      <template v-if="label"> {{ label }}</template>
      <template v-else>
        <slot name="label" />
      </template>
    </MenuButton>

    <TransitionRoot
      enter="duration-100 ease-in"
      enter-from="translate-y-1 opacity-0"
      enter-to="opacity-100"
      leave="duration-100 ease-out"
      leave-from="translate-y-1 opacity-100"
      leave-to="opacity-0 translate-y-1"
    >
      <DropdownContentCustom
        v-if="$slots['content']"
        :class="alignClass"
      >
        <template #default="{ close }">
          <slot
            name="content"
            :close="close"
          />
        </template>
      </DropdownContentCustom>

      <DropdownContentItems
        v-else
        :items="items"
        :class="alignClass"
      />
    </TransitionRoot>
  </Menu>
</template>
