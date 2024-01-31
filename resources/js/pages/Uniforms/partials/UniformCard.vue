<script setup lang="ts">
import { Category, Uniform } from '@/types/pages'
import { computed } from 'vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps<{ uniform: Uniform; category: Category }>()

const imagesSrc = computed(() => props.uniform.images.map((image) => image.url))
</script>

<template>
  <Link
    as="div"
    :href="
      route('uniforms.show', {
        category: category.slug,
        uniform: uniform.slug,
      })
    "
    class="rounded-xl overflow-hidden bg-white shadow-lg group cursor-pointer"
  >
    <AppCarousel
      :src-slides="imagesSrc"
      img-class="object-cover overflow-hidden h-32 "
      autoplay
      :autoplay-interval="3000"
      pagination
    />
    <div
      class="m-3 md:m-5 font-bold group-hover:link-primary transition-colors"
    >
      {{ uniform.name }}
    </div>
  </Link>
</template>
