<script setup lang="ts">
import InputLabel from '@/components/input/InputLabel.vue'
import InputError from '../input/InputError.vue'
import InputHint from '../input/InputHint.vue'

interface AppInputFileProps {
  label?: string
  name: string
  errorMessage?: string
  hint?: string
}

const emit = defineEmits(['input'])

defineProps<AppInputFileProps>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement

  emit('input', target.files)
}
</script>

<template>
  <label class="form-control">
    <InputLabel v-if="label">
      {{ label }}
    </InputLabel>

    <input
      class="file-input file-input-bordered w-full"
      :name="name"
      v-bind="$attrs"
      type="file"
      @input="onInput"
    />

    <div class="label flex-col items-start">
      <InputError :message="errorMessage" />
      <InputHint v-if="hint">
        {{ hint }}
      </InputHint>
    </div>
  </label>
</template>
