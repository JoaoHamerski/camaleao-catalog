<script setup lang="ts">
import { ref } from 'vue'
import SidebarDrawerList from './SidebarDrawerList.vue'
import type { SidebarDrawerProps } from '@/types/components/drawer'

withDefaults(defineProps<SidebarDrawerProps>(), {
  items: () => [],
  toggleClass: 'btn px-1',
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
        <div class="fa-stack">
          <FWIcon
            icon="fas fa-shield"
            class="fa-stack-1x text-sm rounded-full p-0.5 z-[1] ml-3 mt-3"
          />
          <FWIcon
            icon="fas fa-bars"
            class="fa-stack-1x text-lg"
          />
        </div>
      </label>
    </div>

    <div class="drawer-side z-50">
      <label
        :for="id"
        aria-label="Fechar a barra lateral"
        class="drawer-overlay"
      />

      <SidebarDrawerList
        v-if="!$slots['content-items']"
        :items="items"
        @click.capture="closeDrawer"
      >
        <template #header>
          <slot name="header" />
        </template>
      </SidebarDrawerList>
    </div>
  </div>
</template>
