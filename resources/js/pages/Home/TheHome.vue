<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import { ref } from 'vue'

const errorMessage = ref('')
</script>
<template>
  <div>
    {{ usePage().props.auth.user ?? 'no-user' }}
  </div>
  <div>
    <AppInput
      name="test"
      label="Test"
      :error-message="errorMessage"
    />

    <AppButton
      label="Toggle Error"
      @click.prevent="errorMessage = errorMessage ? '' : 'E-mail incorreto'"
    />
  </div>
</template>
