<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'
import { useUserStore } from '@/store/user-store'
import { DropdownItem } from '@/types/components'
import NavbarBrand from './NavbarBrand.vue'
import NavbarItems from './NavbarItems.vue'

const NavbarDrawer = defineAsyncComponent(() => import('./NavbarDrawer.vue'))
const NavbarUserAuth = defineAsyncComponent(
  () => import('./NavbarUserAuth.vue'),
)
const NavbarUserGuest = defineAsyncComponent(
  () => import('./NavbarUserGuest.vue'),
)
const RegisterModal = defineAsyncComponent(
  () => import('@/pages/Common/auth/RegisterModal.vue'),
)
const LoginModal = defineAsyncComponent(
  () => import('@/pages/Common/auth/LoginModal.vue'),
)

import NAVBAR_ITEMS from './navbar-items'
import { useRouteStore } from '@/store/route-store'

const loginModalShow = ref(false)
const registerModalShow = ref(false)

const userStore = useUserStore()
const routeStore = useRouteStore()

const isAuth = computed(() => userStore.isAuth)

const openLoginModal = () => {
  loginModalShow.value = true
}

const onCreateAccount = () => {
  registerModalShow.value = true
}

const dropdownMobileItems = computed(() =>
  NAVBAR_ITEMS.map<DropdownItem>((item) => ({
    label: item.label,
    link: {
      url: item.url,
    },
    icon: item.icon,
  })),
)
</script>

<template>
  <div
    class="navbar px-5 transition-colors bg-camaleao"
    :class="{ 'bg-slate-700': routeStore.isCurrent('dashboard.*') }"
  >
    <div class="navbar-start gap-3 hidden md:flex">
      <NavbarDrawer
        v-if="userStore.hasPermission('access_admin_panel')"
        id="header-bar-mobile"
        class="w-fit"
      />
      <NavbarBrand />
      <NavbarItems />
    </div>

    <div class="navbar-start md:hidden gap-2">
      <NavbarDrawer
        v-if="userStore.hasPermission('access_admin_panel')"
        id="header-bar-desktop"
        class="w-fit"
      />
      <AppDropdown
        icon="fas fa-bars"
        :items="dropdownMobileItems"
      />
    </div>

    <div class="navbar-center md:hidden">
      <NavbarBrand />
    </div>

    <div class="navbar-end">
      <NavbarUserAuth v-if="isAuth" />
      <NavbarUserGuest
        v-else
        @login-clicked="openLoginModal"
        @register-clicked="onCreateAccount"
      />
    </div>

    <LoginModal
      v-model:show="loginModalShow"
      @create-account="onCreateAccount"
    />
    <RegisterModal v-model:show="registerModalShow" />
  </div>
</template>
