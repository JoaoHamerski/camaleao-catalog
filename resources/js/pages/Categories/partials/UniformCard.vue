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
    class="card w-60 max-h-52 bg-white shadow-lg group cursor-pointer"
  >
    <figure>
      <AppCarousel
        :images-src="imagesSrc"
        img-class="object-cover"
        class="object-cover"
      />
    </figure>
    <div class="p-5 font-bold group-hover:link-primary transition-colors">
      {{ uniform.name }}
    </div>
  </Link>
</template>
