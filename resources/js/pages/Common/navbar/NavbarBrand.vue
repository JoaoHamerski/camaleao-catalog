<script setup lang="ts">
import NavbarBrandSvg from './NavbarBrandSvg.vue'
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <Link
    :href="route('home')"
    class="max-w-24"
  >
    <NavbarBrandSvg class="fill-white" />
  </Link>
</template>
