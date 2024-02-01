<script setup lang="ts">
import { useRouteStore } from '@/store/route-store'
import { SidebarDrawerListItemProps } from '@/types/components'
import { computed } from 'vue'

import NavbarDrawerHeader from './NavbarDrawerHeader.vue'
import SidebarDrawer from '@/components/drawer/SidebarDrawer.vue'

const useRoute = useRouteStore()

defineProps<{ id: string }>()
const items = computed<SidebarDrawerListItemProps[]>(() => [
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
    :id="id"
    toggle-class="btn btn-ghost px-1 border-none text-white"
    :items="items"
  >
    <template #header>
      <NavbarDrawerHeader />
    </template>
  </SidebarDrawer>
</template>
