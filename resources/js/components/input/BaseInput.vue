<script setup lang="ts">
import { nextTick, ref } from 'vue'

export interface BaseInputProps {
  type: 'text' | 'password'
  hasError: boolean
  inputClasses: string | object
}

const emit = defineEmits(['update:modelValue'])
defineProps<BaseInputProps>()

const input = ref<HTMLInputElement | null>(null)
const model = defineModel<string>()

const focusInput = async () => {
  if (!input.value) {
    return
  }

  await nextTick()

  input.value.focus()
  input.value.setSelectionRange(99999, 99999)
}

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement

  emit('update:modelValue', target.value)
}

defineExpose({
  focusInput,
})
</script>

<template>
  <input
    ref="input"
    :value="model"
    class="input input-bordered w-full focus:input-primary text-black"
    :type="type"
    :class="{ 'input-error': hasError }"
    @input="onInput"
  />
</template>
