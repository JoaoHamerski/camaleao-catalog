import '@/libs/fontawesome'
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/vue3'
import { createApp, h } from 'vue'
import Bootstrap from './bootstrap'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: (title) => `${title} ${appName}`,
  resolve: Bootstrap.resolvePageComponent,
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    const bootstrap = new Bootstrap(app)

    // prettier-ignore
    bootstrap
        .addInertiaPlugin(plugin)
        .addZiggy()
        .addPinia()
        .addFontAwesome()
        .addGlobalComponents()
        .addAutoAnimate()
        .mount(el)
  },
  progress: {
    color: '#4B5563',
  },
})
