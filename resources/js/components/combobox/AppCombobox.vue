<script setup lang="ts">
import { Combobox } from '@headlessui/vue'
import ComboboxCustomInput from './ComboboxCustomInput.vue'
import ComboboxCustomOptions from './ComboboxCustomOptions.vue'
import { AppComboboxProps } from '@/types/components'

withDefaults(defineProps<AppComboboxProps>(), {
  by: 'id',
  loading: false,
})

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

    <AppTransition
      transition-as="root"
      enter="transition-all duration-100"
      enter-from="transform scale-y-0 opacity-0"
      enter-to="transform scale-y-100 opacity-100"
      leave-as-enter
    >
      <ComboboxCustomOptions
        :items="items"
        :by="by"
      >
        <template #option="item">
          <slot
            name="option"
            v-bind="item"
          />
        </template>
      </ComboboxCustomOptions>
    </AppTransition>
  </Combobox>
</template>
