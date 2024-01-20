<script setup lang="ts">
import navbarItems from './navbar-items'
import HeaderBarButton from './HeaderBarButton.vue'
</script>

<template>
  <div class="flex gap-2">
    <template
      v-for="item in navbarItems"
      :key="item.label"
    >
      <HeaderBarButton
        :label="item.label"
        :icon="item.icon"
      />
    </template>
  </div>
</template>
