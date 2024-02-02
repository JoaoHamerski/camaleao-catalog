<script setup lang="ts">
import { openInNewTab } from '@/utils/helpers'
import NavbarMain from '../navbar/NavbarMain.vue'
import ToastComponent from '@/components/toast/ToastComponent.vue'
import { useUserStore } from '@/store/user-store'

const userStore = useUserStore()

const onWhatsappBtnClick = () => {
  const message = 'gostaria de saber mais sobre o catálogo da Camaleão Camisas.'

  const fullMessage = userStore.isAuth
    ? `Olá, me chamo ${userStore.firstName}, ${message} `
    : `Olá, ${message}`

  const href = `https://wa.me/5589981171458?text=${fullMessage}`

  openInNewTab(href)
}
</script>

<template>
  <div id="main-layout">
    <ToastComponent />
    <NavbarMain />

    <div class="my-5 min-h-[90vh]">
      <slot />
    </div>

    <footer
      class="footer footer-center p-10 bg-base-200 text-base-content gap-2 mt-auto"
    >
      <div class="text-center">
        <div>Camaleão Camisas - 44.214.449/0001-28</div>
        <aside>
          <p>Rua Rua Helvecio Pinheiro, 277 - Bom Jesus, Piauí - 64900-000</p>
        </aside>
      </div>

      <aside class="flex text-gray-400 mt-3 text-xs">
        <span>Desenvolvedor:</span>
        <a
          class="link"
          href="mailto:joaohamerski@hotmail.com"
          >joaohamerski@hotmail.com</a
        >
      </aside>
    </footer>

    <AppButton
      aria-label="Entre em contato via Whatsapp"
      class="btn-success text-2xl rounded-full w-12 h-12 scale-90 lg:scale-100 text-white fixed right-4 bottom-4 opacity-80 shadow-xl"
      icon="fab fa-whatsapp"
      @click.prevent="onWhatsappBtnClick"
    />
  </div>
</template>
