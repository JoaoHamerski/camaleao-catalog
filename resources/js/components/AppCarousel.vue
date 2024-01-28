<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { computed } from 'vue'
import { AppCarouselProps } from '@/types/components'

const props = withDefaults(defineProps<AppCarouselProps>(), {
  alt: 'Imagem do carrosel',
  imgClass: '',
  pagination: false,
  navigation: false,
})

const hasMultipleSlides = computed(() => props.imagesSrc.length > 1)

const showPagination = computed(
  () => hasMultipleSlides.value && props.pagination,
)

const showNavigation = computed(() => props.navigation)
</script>

<template>
  <Carousel
    pause-autoplay-on-hover
    :autoplay="hasMultipleSlides ? 3000 : 0"
    wrap-around
    :mouse-drag="hasMultipleSlides"
  >
    <Slide
      v-for="src in imagesSrc"
      :key="src"
    >
      <img
        :class="imgClass"
        :src="src"
        :alt="alt"
      />
    </Slide>

    <template #addons>
      <Pagination v-if="showPagination" />
      <Navigation v-if="showNavigation" />
    </template>
  </Carousel>
</template>

<style>
.carousel__viewport {
  @apply rounded;
}

.carousel__pagination {
  @apply absolute bottom-2 right-0 left-0;
}

.carousel__pagination-item .carousel__pagination-button::after {
  @apply w-1.5 h-1.5 rounded-full;
}
</style>
