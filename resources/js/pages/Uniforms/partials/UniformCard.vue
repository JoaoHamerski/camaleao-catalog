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
    class="rounded-xl w-40 md:w-60 bg-white shadow-lg group cursor-pointer"
  >
    <AppCarousel
      :src-slides="imagesSrc"
      img-class="object-cover h-30 md:h-40 w-full rounded-t-xl"
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
