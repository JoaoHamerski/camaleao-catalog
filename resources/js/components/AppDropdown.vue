<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionRoot,
} from '@headlessui/vue'
import { computed, useSlots } from 'vue'

interface AppDropdownProps {
  label?: string
  btnClass?: string
  items?: DropdownItem[]
  align?: 'left' | 'right'
}

export type DropdownItem = {
  label: string
  icon?: string
  onclick: () => void
}

const ALIGN_CLASSES_MAP = {
  left: 'left-0',
  right: 'right-0',
}

const slots = useSlots()
const props = withDefaults(defineProps<AppDropdownProps>(), {
  label: '',
  btnClass: 'btn btn-ghost',
  items: () => [],
  align: 'left',
})

const alignClass = computed(() => ALIGN_CLASSES_MAP[props.align])
const elementContent = computed(() => (slots['content'] ? 'div' : 'ul'))
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
      <MenuItems
        class="absolute shadow-lg py-3 px-2 bg-base-100 rounded-lg w-52 flex flex-col gap-1"
        :as="elementContent"
        :class="alignClass"
      >
        <MenuItem
          v-if="$slots['content']"
          v-slot="{ close }"
          as="div"
        >
          <slot
            name="content"
            v-bind="{ close }"
          />
        </MenuItem>

        <template v-else>
          <MenuItem
            v-for="item in items"
            :key="item.label"
            as="li"
            class="group"
          >
            <a
              href=""
              class="rounded-lg hover:bg-base-300 active:bg-camaleao active:text-camaleao-secondary transition-colors block px-3 py-1"
            >
              {{ item.label }}
            </a>
          </MenuItem>
        </template>
      </MenuItems>
    </TransitionRoot>
  </Menu>
</template>
