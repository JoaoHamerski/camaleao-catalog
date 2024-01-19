import { usePage } from '@inertiajs/vue3'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  getters: {
    authUser() {
      const page = usePage()

      return page.props.auth.user
    },
  },
})
