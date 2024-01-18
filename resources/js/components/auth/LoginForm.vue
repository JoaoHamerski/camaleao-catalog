<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const onSubmit = () => {
  form.post(route('auth.login'))
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <AppInput
      v-model="form.email"
      autofocus
      label="E-mail"
      name="email"
      class="mb-3"
      placeholder="Digite seu e-mail..."
      autocomplete="email"
    />

    <AppInput
      v-model="form.password"
      class="mb-3"
      label="Senha"
      type="password"
      name="password"
      placeholder="Digite sua senha..."
    />

    <AppButton
      label="Entrar"
      class="btn-primary w-full"
    />

    <div class="divider my-5">OU</div>

    <div class="flex flex-col gap-3">
      <AppButton
        class="btn-success w-full"
        label="Crie uma conta"
      />
      <AppButton
        icon="fab fa-google"
        label="Continue com Google"
        class="btn-outline btn-error w-full"
      />
    </div>
  </form>
</template>
