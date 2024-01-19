import { usePage } from '@inertiajs/vue3'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  getters: {
    user() {
      const page = usePage()

      return page.props.auth.user
    },
    isAuth() {
      return !!this.user
    },
    userFirstName() {
      return this.user.name.split(' ')[0]
    },
  },
})
