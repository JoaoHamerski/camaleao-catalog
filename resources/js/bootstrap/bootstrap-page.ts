import MainLayout from '@/pages/Shared/layouts/MainLayout.vue'
import { DefineComponent } from 'vue'

export default class BootstrapPage {
  protected static definePageLayout(page: DefineComponent) {
    page.default.layout = page.default.layout || MainLayout
  }

  protected static getRequestedPage(name: string) {
    const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue', {
      eager: true,
    })

    return pages[`../pages/${name}.vue`]
  }

  public static resolvePageComponent(name: string) {
    const page = BootstrapPage.getRequestedPage(name)

    BootstrapPage.definePageLayout(page)

    return page
  }
}
