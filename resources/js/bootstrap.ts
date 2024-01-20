import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { router } from '@inertiajs/vue3'
import { createPinia } from 'pinia'
import { App, DefineComponent, Plugin } from 'vue'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'
import MainLayout from './components/layouts/MainLayout.vue'
import { useRouteStore } from './store/route-store'

export default class Bootstrap {
  protected app: App

  constructor(app: App) {
    this.app = app
  }

  mount(el: Element) {
    this.app.mount(el)
  }

  addInertiaPlugin(plugin: Plugin) {
    this.app.use(plugin)

    return this
  }

  addFontAwesome() {
    this.app.component('FWIcon', FontAwesomeIcon)

    return this
  }

  addAutoAnimate() {
    this.app.use(autoAnimatePlugin)

    return this
  }

  addZiggy() {
    this.app.use(ZiggyVue)

    return this
  }

  addPinia() {
    const pinia = createPinia()

    this.app.use(pinia)

    return this
  }

  addRouteNavigationListener() {
    const route = useRouteStore()

    router.on('navigate', () => {
      route.updateRoute()
    })

    return this
  }

  protected static definePageLayout(page: DefineComponent) {
    page.default.layout = page.default.layout || MainLayout
  }

  protected static getRequestedPage(name: string) {
    const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue', {
      eager: true,
    })

    return pages[`./pages/${name}.vue`]
  }

  static resolvePageComponent(name: string) {
    const page = Bootstrap.getRequestedPage(name)

    Bootstrap.definePageLayout(page)

    return page
  }

  addGlobalComponents() {
    const components = import.meta.glob('./**/App*.vue', { eager: true })

    Object.entries(components).forEach(([path, definition]: [string, any]) => {
      const componentName = path
        .split('/')
        .pop()!
        .replace(/\.\w+$/, '')

      this.app.component(componentName, definition.default)
    })

    return this
  }
}
