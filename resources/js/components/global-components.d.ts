import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppButton from './AppButton.vue'
import AppDropdown from './AppDropdown.vue'
import AppModal from './AppModal.vue'
import AppInput from './input/AppInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FWIcon: typeof FontAwesomeIcon
    AppButton: typeof AppButton
    AppDropdown: typeof AppDropdown
    AppModal: typeof AppModal
    AppInput: typeof AppInput
  }
}

export default {}
