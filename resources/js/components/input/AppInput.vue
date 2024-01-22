<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import BaseInput from './BaseInput.vue'
import BaseInputPassword from './BaseInputPassword.vue'
import InputError from './InputError.vue'
import InputHint from './InputHint.vue'
import InputLabel from './InputLabel.vue'

export interface AppInputProps {
  type?: 'text' | 'password'
  accept?: string
  label?: string
  name: string
  error?: boolean
  errorMessage?: string
  hint?: string
  inputClass?: string
  autofocus?: boolean
  placeholder?: string
  autocomplete?: string
}

const props = withDefaults(defineProps<AppInputProps>(), {
  type: 'text',
  accept: undefined,
  label: undefined,
  error: false,
  hint: undefined,
  errorMessage: undefined,
  inputClass: undefined,
  autofocus: false,
  placeholder: undefined,
  autocomplete: undefined,
})

const input = ref()
const model = defineModel<string | File>()

const inputClasses = computed(() => [
  props.inputClass,
  { 'input-error': hasError.value },
])

const hasError = computed(() => props.error || !!props.errorMessage)

const isTypePassword = computed(() => props.type === 'password')

const inputComponent = computed(() =>
  isTypePassword.value ? BaseInputPassword : BaseInput,
)

onMounted(() => {
  if (props.autofocus) {
    input.value.focusInput()
  }
})
</script>

<template>
  <label class="form-control">
    <InputLabel v-if="label">
      {{ label }}
    </InputLabel>

    <Component
      :is="inputComponent"
      ref="input"
      v-model="model"
      v-bind="{
        name,
        type,
        hasError,
        inputClasses,
        placeholder,
        autocomplete,
        accept,
      }"
    />

    <div class="label flex-col items-start">
      <InputError :message="errorMessage" />
      <InputHint v-if="hint">
        {{ hint }}
      </InputHint>
    </div>
  </label>
</template>
