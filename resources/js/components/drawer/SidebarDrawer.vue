<script setup lang="ts">
import { ref } from 'vue'
import SidebarDrawerList from './SidebarDrawerList.vue'
import type { SidebarDrawerItemProps } from './SidebarDrawerListItem.vue'

interface SidebarDrawer {
  id: string
  items?: SidebarDrawerItemProps[]
  ariaLabelOverlay?: string
  toggleClass?: string | string[]
}

withDefaults(defineProps<SidebarDrawer>(), {
  items: () => [],
  ariaLabelOverlay: 'Fechar barra lateral',
  toggleClass: 'btn',
})

const isOpen = ref(false)

const closeDrawer = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="drawer">
    <input
      :id="id"
      v-model="isOpen"
      type="checkbox"
      class="drawer-toggle"
    />

    <div class="drawer-content">
      <label
        :for="id"
        :class="toggleClass"
      >
        <FWIcon icon="fas fa-bars" />
      </label>
    </div>

    <div class="drawer-side z-50">
      <label
        :for="id"
        :aria-label="ariaLabelOverlay"
        class="drawer-overlay"
      />

      <SidebarDrawerList
        v-if="!$slots['content-items']"
        :items="items"
        @click.capture="closeDrawer"
      >
        <template #header-item>
          <slot name="header" />
        </template>
      </SidebarDrawerList>
    </div>
  </div>
</template>
