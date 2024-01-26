<script setup lang="ts">
import {
  Combobox,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
  ComboboxButton,
} from '@headlessui/vue'
import ComboboxCustomInput from './ComboboxCustomInput.vue'
import { AppComboboxProps } from '@/types/components'

defineProps<AppComboboxProps>()
defineEmits(['update:modelValue'])
</script>

<template>
  <Combobox
    class="relative"
    as="div"
    :model-value="modelValue"
    by="id"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <ComboboxButton class="w-full">
      <ComboboxCustomInput
        v-bind="{
          name,
          modelValue,
          placeholder,
          label,
          loading,
          displayValue,
          error,
          errorMessage,
        }"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </ComboboxButton>

    <TransitionRoot
      enter="transition duration-100 ease-out"
      enter-from="transform scale-y-0 opacity-0"
      enter-to="transform scale-y-100 opacity-100"
      leave="transition duration-100 ease-out"
      leave-from="transform scale-y-100 opacity-100"
      leave-to="transform scale-y-0 opacity-0"
    >
      <ComboboxOptions
        class="min-w-40 shadow-lg rounded-b-lg max-h-52 overflow-auto w-full mt-2 absolute bg-white"
      >
        <ComboboxOption
          v-for="item in items"
          :key="item.id"
          v-slot="{ selected }"
          :value="item"
        >
          <div
            class="px-3 py-2 transition-colors cursor-pointer"
            :class="{
              'hover:bg-base-200 active:bg-primary active:text-white':
                !selected,
              'bg-primary text-white': selected,
            }"
          >
            <slot
              name="option"
              v-bind="item"
            />
            <template v-if="!$slots['option']">
              {{ item.name }}
            </template>
          </div>
        </ComboboxOption>
      </ComboboxOptions>
    </TransitionRoot>
  </Combobox>
</template>
