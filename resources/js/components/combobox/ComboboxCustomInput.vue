<script setup lang="ts">
import { ComboboxInput } from '@headlessui/vue'
import InputFooter from '../input/InputFooter.vue'
import InputLabel from '../input/InputLabel.vue'
import { computed } from 'vue'
import { AppComboboxInputProps } from '@/types/components'
import { isEmpty } from 'lodash-es'

const emit = defineEmits(['update:modelValue'])
const props = defineProps<AppComboboxInputProps>()

const hasError = computed(() => props.error || !!props.errorMessage)

const displayEraseIcon = computed(() => !isEmpty(props.modelValue))

const eraseIconClicked = () => {
  emit('update:modelValue', null)
}
</script>

<template>
  <label>
    <InputLabel>
      {{ label }}
    </InputLabel>

    <div class="relative flex items-center">
      <ComboboxInput
        v-bind="$attrs"
        class="input input-bordered text-black w-full focus:input-primary pr-10"
        :class="{
          'input-error': hasError,
        }"
        :placeholder="placeholder"
        :name="name"
        :display-value="displayValue"
        autocomplete="off"
      />

      <span class="absolute right-4">
        <span
          v-if="loading"
          class="loading loading-spinner w-3"
        />
        <FWIcon
          v-else-if="displayEraseIcon"
          fixed-width
          class="hover:text-black cursor-pointer"
          icon="fas fa-times"
          @click.prevent="eraseIconClicked"
        />
        <FWIcon
          v-else
          fixed-width
          icon="fas fa-sort"
          size="sm"
        />
      </span>
    </div>

    <InputFooter
      :error="errorMessage"
      :hint="hint"
    />
  </label>
</template>
