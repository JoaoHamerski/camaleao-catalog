<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const onFormError = () => {
  form.password = ''
}
</script>

<template>
  <AppForm
    :form="form"
    :endpoint="route('auth.login')"
    @error="onFormError"
  >
    <AppInput
      v-model="form.email"
      autofocus
      label="E-mail"
      name="email"
      class="mb-3"
      placeholder="Digite seu e-mail..."
      autocomplete="email"
      :error-message="form.errors.email"
    />

    <AppInput
      v-model="form.password"
      class="mb-3"
      label="Senha"
      type="password"
      name="password"
      autocomplete="password"
      placeholder="Digite sua senha..."
      :error-message="form.errors.password"
    />

    <template #footer>
      <AppButton
        type="submit"
        :disabled="form.processing"
        :loading="form.processing"
        label="Entrar"
        class="btn-primary w-full"
      />
    </template>
  </AppForm>
</template>
