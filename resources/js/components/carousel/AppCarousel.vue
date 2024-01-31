<script setup lang="ts">
import { AppCarouselProps } from '@/types/components'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import CarouselPagination from './CarouselPagination.vue'
import CarouselNavigation from './CarouselNavigation.vue'

const props = defineProps<AppCarouselProps>()

const currentIndex = ref(0)
const intervalId = ref()
const slidesCount = computed(() => props.srcSlides.length)
const hasMultipleSlides = computed(() => slidesCount.value > 1)
const isAutoplay = computed(() => props.autoplay)

const showPagination = computed(
  () => hasMultipleSlides.value && props.pagination,
)

const showNavigation = computed(
  () => hasMultipleSlides.value && props.navigation,
)

const onLeftBtnClick = () => {
  if (currentIndex.value == 0) {
    currentIndex.value = slidesCount.value - 1
    return
  }

  currentIndex.value--
}

const onRightBtnClick = () => {
  if (currentIndex.value < slidesCount.value - 1) {
    currentIndex.value++
    return
  }

  currentIndex.value = 0
}

const setAutoplay = () => {
  const id = setInterval(() => {
    onRightBtnClick()
  }, props.autoplayInterval)

  intervalId.value = id
}

const pauseAutoplay = () => {
  if (!isAutoplay.value) {
    return
  }

  clearInterval(intervalId.value)
}

const resumeAutoplay = () => {
  if (!isAutoplay.value) {
    return
  }

  setAutoplay()
}

onMounted(() => {
  if (isAutoplay.value) {
    setAutoplay()
  }
})

onUnmounted(() => {
  clearInterval(intervalId.value)
})
</script>

<template>
  <div class="relative">
    <div
      class="carousel w-full"
      :class="carouselClass"
      @mouseover="pauseAutoplay"
      @mouseleave="resumeAutoplay"
    >
      <div
        class="carousel-item w-full transition-all duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="src in srcSlides"
          :key="src"
          class="flex-grow-0 flex-shrink-0 w-full"
        >
          <img
            class="mx-auto"
            :class="imgClass"
            :src="src"
            alt="Carousel Item"
          />
        </div>
      </div>
    </div>

    <CarouselPagination
      v-if="showPagination"
      :active-index="currentIndex"
      :slides-count="srcSlides.length"
    />
    <CarouselNavigation
      v-if="showNavigation"
      @left="onLeftBtnClick"
      @right="onRightBtnClick"
    />
  </div>
</template>
