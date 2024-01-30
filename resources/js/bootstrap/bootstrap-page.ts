import MainLayout from '@/pages/Common/layouts/MainLayout.vue'
import { DefineComponent } from 'vue'

export default class BootstrapPage {
  protected static definePageLayout(page: DefineComponent) {
    page.default.layout = page.default.layout || MainLayout
  }

  protected static getRequestedPage(name: string) {
    const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue')

    return pages[`../pages/${name}.vue`]()
  }

  public static async resolvePageComponent(name: string) {
    const page = await BootstrapPage.getRequestedPage(name)

    BootstrapPage.definePageLayout(page)

    return page
  }
}
