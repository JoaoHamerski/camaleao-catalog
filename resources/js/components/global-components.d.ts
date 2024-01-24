import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppButton from './AppButton.vue'
import AppForm from './AppForm.vue'
import AppDropdown from './dropdown/AppDropdown.vue'
import AppInput from './input/AppInput.vue'
import AppModal from './modal/AppModal.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FWIcon: typeof FontAwesomeIcon
    AppButton: typeof AppButton
    AppDropdown: typeof AppDropdown
    AppModal: typeof AppModal
    AppInput: typeof AppInput
    AppForm: typeof AppForm
  }
}

export default {}
