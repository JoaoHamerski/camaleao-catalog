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
    class="card w-60 h-52 bg-base-100 shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
  >
    <img
      :src="category.image.url"
      alt="Imagem da categoria"
      class="object-cover bg-bottom h-52 rounded-xl"
    />
    <div
      class="px-5 py-2 font-bold text-lg absolute bottom-0 backdrop-blur-md rounded-b-xl text-white w-full uppercase"
    >
      {{ category.name }}
    </div>
    <div
      class="absolute flex items-baseline gap-1 top-3 right-3 text-white font-bold bg-black/50 px-2 py-1 rounded-full"
    >
      <FWIcon
        class="text-xs"
        icon="fas fa-tshirt"
        fixed-width
      />
      <span class="text-sm">{{ category.uniforms_count }}</span>
    </div>
  </Link>
</template>
