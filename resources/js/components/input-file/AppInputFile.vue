<script setup lang="ts">
import InputLabel from '@/components/input/InputLabel.vue'
import InputError from '../input/InputError.vue'
import InputHint from '../input/InputHint.vue'

interface AppInputFileProps {
  label?: string
  name: string
  errorMessage?: string
  hint?: string
  multiple?: boolean
}

const emit = defineEmits(['change'])
const modelValue = defineModel<FileList | File | null>()

const props = withDefaults(defineProps<AppInputFileProps>(), {
  label: '',
  errorMessage: '',
  hint: '',
  multiple: false,
})

const setFiles = (files: FileList | File | null) => {
  emit('change', files)
  modelValue.value = files
}

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files

  if (props.multiple) {
    setFiles(files)
    return
  }

  if (files) {
    setFiles(files?.[0])
  }
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
      :multiple="multiple"
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
