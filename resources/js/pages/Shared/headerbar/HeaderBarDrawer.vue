<script setup lang="ts">
import HeaderBarDrawerHeader from './HeaderBarDrawerHeader.vue'
import SidebarDrawer from '@/components/drawer/SidebarDrawer.vue'
import type { SidebarDrawerItemProps } from '@/components/drawer/SidebarDrawerListItem.vue'
import { useRouteStore } from '@/store/route-store'
import { computed } from 'vue'
const useRoute = useRouteStore()

const items = computed<SidebarDrawerItemProps[]>(() => [
  {
    label: 'Categorias',
    icon: 'fas fa-shapes',
    url: route('dashboard.categories.index'),
    active: useRoute.isCurrent('dashboard.categories.*'),
  },
  {
    label: 'Uniformes',
    icon: 'fas fa-tshirt',
    url: route('dashboard.uniforms.index'),
    active: useRoute.isCurrent('dashboard.uniforms.*'),
  },
])
</script>

<template>
  <SidebarDrawer
    id="header-bar-drawer"
    :items="items"
  >
    <template #header>
      <HeaderBarDrawerHeader />
    </template>
  </SidebarDrawer>
</template>
