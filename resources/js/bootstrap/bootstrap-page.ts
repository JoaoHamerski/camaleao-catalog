import MainLayout from '@/pages/Common/layouts/MainLayout.vue'
import { DefineComponent } from 'vue'

export default class BootstrapPage {
  protected static APP_NAME = 'Camaleão Catálogo'

  protected static definePageLayout(page: DefineComponent) {
    page.default.layout = page.default.layout || MainLayout
  }

  protected static getRequestedPage(name: string) {
    const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue')

    return pages[`../pages/${name}.vue`]()
  }

  public static async resolveComponent(name: string) {
    const page = await BootstrapPage.getRequestedPage(name)

    BootstrapPage.definePageLayout(page)

    return page
  }

  public static defineTitle(title: string) {
    return title
      ? `${title} | ${BootstrapPage.APP_NAME}`
      : BootstrapPage.APP_NAME
  }
}
