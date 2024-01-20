import { defineStore } from 'pinia'
import { ref } from 'vue'
import ziggyRoute from '../../../vendor/tightenco/ziggy/src/js'

export const useRouteStore = defineStore('route', () => {
  const route = ref(ziggyRoute())

  const updateRoute = () => {
    route.value = ziggyRoute()
  }

  const isCurrent = (value: string) => {
    return route.value.current(value)
  }

  return { route, updateRoute, isCurrent }
})
