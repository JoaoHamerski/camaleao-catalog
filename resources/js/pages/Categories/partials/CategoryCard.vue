<script setup lang="ts">
import { Category } from '@/types/pages'
import { Link } from '@inertiajs/vue3'
defineProps<{ category: Category }>()
</script>

<template>
  <Link
    :href="
      route('categories.show', {
        category: category.slug,
      })
    "
    as="div"
    class="card w-60 h-52 bg-base-100 shadow-xl relative rounded-xl group cursor-pointer"
  >
    <img
      :src="category.image.url"
      alt="Imagem da categoria"
      class="object-cover bg-bottom h-52 rounded-xl group-hover:scale-105 transition-transform"
    />
    <div
      class="p-5 font-bold text-lg absolute bottom-0 backdrop-blur-lg rounded-b-xl text-white w-full uppercase"
    >
      {{ category.name }}
    </div>
  </Link>
</template>
