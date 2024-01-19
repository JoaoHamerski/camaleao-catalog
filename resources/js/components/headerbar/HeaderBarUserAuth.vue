<script setup lang="ts">
import { useAuthStore } from '@/store/auth-store'
import { DropdownItem } from '../dropdown/DropdownContentItemsItem.vue'

const authDropdownItems: DropdownItem[] = [
  { icon: 'fas fa-user-circle', label: 'Minha conta', link: '' },
  {
    icon: 'fas fa-right-from-bracket',
    label: 'Sair',
    link: route('auth.logout'),
    method: 'post',
  },
]

const authStore = useAuthStore()
</script>

<template>
  <AppDropdown
    class="dropdown-end"
    btn-class="btn btn-ghost btn-sm w-fit h-10 rounded-full"
    align="right"
    :items="authDropdownItems"
  >
    <template #label>
      <span class="text-white">
        Olá, <b>{{ authStore.userFirstName }}</b></span
      >
      <FWIcon
        icon="fas fa-user-circle"
        size="xl"
        class="text-white"
      />
    </template>
  </AppDropdown>
</template>
