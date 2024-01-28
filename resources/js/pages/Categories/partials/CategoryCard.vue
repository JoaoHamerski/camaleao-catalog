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
    class="card w-60 h-52 bg-base-100 shadow-xl relative rounded-xl hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
  >
    <img
      :src="category.image.url"
      alt="Imagem da categoria"
      class="object-cover bg-bottom h-52 rounded-xl transition-transform"
    />
    <div
      class="px-5 py-2 font-bold text-lg absolute bottom-0 backdrop-blur-md rounded-b-xl text-white w-full uppercase"
    >
      {{ category.name }}
    </div>
  </Link>
</template>
