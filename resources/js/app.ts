import '@/libs/fontawesome'
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/vue3'
import { createApp, h } from 'vue'
import Bootstrap from './bootstrap/bootstrap'
import BootstrapPage from './bootstrap/bootstrap-page'

createInertiaApp({
  title: BootstrapPage.defineTitle,
  resolve: BootstrapPage.resolveComponent,
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    const bootstrap = new Bootstrap(app)

    bootstrap
      .addInertiaPlugin(plugin)
      .addZiggy()
      .addPinia()
      .addFontAwesome()
      .addGlobalComponents()
      .addAutoAnimate()
      .addRouteNavigationListener()
      .addVueQuery()
      .mount(el)
  },
  progress: {
    color: '#066ddc',
  },
})
