<script setup lang="ts">
import { useUserStore } from '@/store/user-store'
import { DropdownItem } from '../dropdown/DropdownContentItemsItem.vue'
import { onMounted } from 'vue'
import { ref } from 'vue'

const userStore = useUserStore()

const adminPanelItem: DropdownItem = {
  icon: 'fas fa-gauge',
  label: 'Painel',
  link: route('dashboard.index'),
}

const authDropdownItems = ref<DropdownItem[]>([
  {
    icon: 'fas fa-user-circle',
    label: 'Minha conta',
    link: '',
  },
  {
    icon: 'fas fa-right-from-bracket',
    label: 'Sair',
    link: route('auth.logout'),
    method: 'post',
  },
])

onMounted(() => {
  if (userStore.hasPermission('access_admin_panel')) {
    authDropdownItems.value.unshift(adminPanelItem)
  }
})
</script>

<template>
  <AppDropdown
    class="dropdown-end"
    btn-class="btn btn-ghost btn-sm w-fit h-10 rounded-full"
    align="right"
    :items="authDropdownItems"
    close-on-click
  >
    <template #label>
      <span class="text-white">
        Olá, <b>{{ userStore.firstName }}</b></span
      >
      <FWIcon
        icon="fas fa-user-circle"
        size="xl"
        class="text-white"
      />
    </template>
  </AppDropdown>
</template>
