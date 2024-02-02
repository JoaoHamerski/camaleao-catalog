import type { Toast, ToastOptions, ToastType } from '@/types/store'
import uniqueId from 'lodash/uniqueId'
import { defineStore } from 'pinia'

const DEFAULT_TIMEOUT = 4000
const MAX_TOASTS_PER_TIME = 3

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[],
  }),
  actions: {
    show(type: ToastType, message: string, options: ToastOptions = {}) {
      this.toasts.unshift({
        id: uniqueId(),
        type,
        message,
      })

      const timeoutId = setTimeout(() => {
        this.toasts.shift()
      }, options.timeout || DEFAULT_TIMEOUT)

      if (this.toasts.length > MAX_TOASTS_PER_TIME) {
        this.toasts.pop()
        clearTimeout(timeoutId)
      }
    },
    success(message: string, options: ToastOptions = {}) {
      this.show('success', message, options)
    },
    info(message: string, options: ToastOptions = {}) {
      this.show('info', message, options)
    },
    error(message: string, options: ToastOptions = {}) {
      this.show('error', message, options)
    },
  },
})
