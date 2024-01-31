import '@/libs/fontawesome'
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/vue3'
import { createApp, h } from 'vue'
import Bootstrap from './bootstrap/bootstrap'
import BootstrapPage from './bootstrap/bootstrap-page'

const appName = import.meta.env.VITE_APP_NAME || 'Camaleão Catálogo'

createInertiaApp({
  title: (title) => (title ? `${title} | ${appName}` : appName),
  resolve: BootstrapPage.resolvePageComponent,
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
