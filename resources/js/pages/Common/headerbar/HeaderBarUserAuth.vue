<script setup lang="ts">
import { useUserStore } from '@/store/user-store'
import type { DropdownItem } from '@/types/components'
import { onMounted } from 'vue'
import { ref } from 'vue'

const userStore = useUserStore()

const adminPanelItem: DropdownItem = {
  icon: 'fas fa-gauge',
  label: 'Painel',
  link: {
    url: route('dashboard.index'),
  },
}

const authDropdownItems = ref<DropdownItem[]>([
  // {
  //   icon: 'fas fa-user-circle',
  //   label: 'Minha conta',
  //   link: {
  //     url: route('auth.my-account'),
  //   },
  // },
  {
    icon: 'fas fa-right-from-bracket',
    label: 'Sair',
    link: {
      url: route('auth.logout'),
      method: 'post',
    },
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
    :btn-class="['btn btn-sm h-10 rounded-full']"
    align="right"
    :items="authDropdownItems"
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
