<script setup lang="ts">
defineEmits(['login-clicked', 'register-clicked'])
</script>

<template>
  <AppDropdown
    class="dropdown-end"
    btn-class="btn btn-ghost btn-sm w-10 h-10 rounded-full"
    align="right"
  >
    <template #label>
      <FWIcon
        icon="fas fa-user-circle"
        size="xl"
        class="text-white"
      />
    </template>

    <template #content="{ close }">
      <div
        class="mx-4 my-4 flex flex-col gap-2"
        @click.capture="close"
      >
        <div class="text-xs text-secondary text-center mb-2">
          Crie uma conta para salvar seus favoritos
        </div>
        <AppButton
          label="Entrar"
          class="btn-primary btn-sm btn-block"
          @click.prevent="$emit('login-clicked')"
        />
        <AppButton
          label="Criar agora"
          class="btn-success btn-sm btn-block"
        />
      </div>
    </template>
  </AppDropdown>
</template>
