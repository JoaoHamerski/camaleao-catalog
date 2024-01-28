import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppButton from './AppButton.vue'
import AppCard from './AppCard.vue'
import AppForm from './AppForm.vue'
import AppPagination from './AppPagination.vue'
import AppTransition from './AppTransition.vue'
import AppCarousel from './carousel/AppCarousel.vue'
import AppCombobox from './combobox/AppCombobox.vue'
import AppDropdown from './dropdown/AppDropdown.vue'
import AppInputFile from './input-file/AppInputFile.vue'
import AppInput from './input/AppInput.vue'
import AppModal from './modal/AppModal.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FWIcon: typeof FontAwesomeIcon
    AppButton: typeof AppButton
    AppDropdown: typeof AppDropdown
    AppModal: typeof AppModal
    AppInput: typeof AppInput
    AppInputFile: typeof AppInputFile
    AppForm: typeof AppForm
    AppCombobox: typeof AppCombobox
    AppPagination: typeof AppPagination
    AppCarousel: typeof AppCarousel
    AppCard: typeof AppCard
    AppTransition: typeof AppTransition
  }
}
