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

withDefaults(defineProps<AppComboboxProps>(), { by: 'id' })
defineEmits(['update:modelValue'])
</script>

<template>
  <Combobox
    class="relative"
    as="div"
    :model-value="modelValue"
    :by="by"
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
          displayProp,
          error,
          errorMessage,
        }"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </ComboboxButton>

    <TransitionRoot
      class="z - 50"
      enter="transition duration-100 ease-out"
      enter-from="transform scale-y-0 opacity-0"
      enter-to="transform scale-y-100 opacity-100"
      leave="transition duration-100 ease-out"
      leave-from="transform scale-y-100 opacity-100"
      leave-to="transform scale-y-0 opacity-0"
    >
      <ComboboxOptions
        class="min-w-40 shadow-lg rounded-b-lg max-h-52 overflow-auto w-full mt-2 absolute bg-white z-10"
      >
        <ComboboxOption
          v-for="item in items"
          :key="item[by]"
          v-slot="{ selected }"
          :value="item"
        >
          <div
            class="px-3 py-2 transition-colors cursor-pointer z-50"
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
              {{ item[displayProp] }}
            </template>
          </div>
        </ComboboxOption>
      </ComboboxOptions>
    </TransitionRoot>
  </Combobox>
</template>
