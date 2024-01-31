export interface AppCarouselProps {
  srcSlides: string[]
  alt?: string
  imgClass?: string
  pagination?: boolean
  navigation?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  carouselClass?: string
}

export interface CarouselPaginationProps {
  slidesCount: number
  activeIndex: number
}
