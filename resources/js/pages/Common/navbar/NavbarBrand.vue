<script setup lang="ts">
import NavbarBrandSvg from './NavbarBrandSvg.vue'
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <Link
    aria-label="Acessar página inicial"
    :href="route('home')"
    class="max-w-24"
  >
    <NavbarBrandSvg class="fill-white" />
  </Link>
</template>
