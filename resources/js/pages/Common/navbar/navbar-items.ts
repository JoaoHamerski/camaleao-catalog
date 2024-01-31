import { usePage } from '@inertiajs/vue3'

type NavbarItemProps = {
  icon: string
  label: string
  url: string
  active: boolean
}

const page = usePage()

const items: NavbarItemProps[] = [
  {
    icon: 'fa-shapes',
    label: 'Categorias',
    url: route('categories.index', {}, false),
    get active() {
      return page.url.startsWith(this.url)
    },
  },
  {
    icon: 'fa-heart',
    label: 'Mais curtidos',
    url: route('uniforms.most-liked', {}, false),
    get active() {
      return page.url.startsWith(this.url)
    },
  },
  {
    icon: 'fa-star',
    label: 'Meus favoritos',
    url: route('favorites.index', {}, false),
    get active() {
      return page.url.startsWith(this.url)
    },
  },
]

export default items
