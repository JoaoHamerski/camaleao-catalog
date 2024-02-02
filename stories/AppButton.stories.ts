import type { Meta, StoryObj } from '@storybook/vue3'
import AppButton from '../resources/js/components/AppButton.vue'

const meta: Meta<typeof AppButton> = {
  component: AppButton,
}

export default meta

type Story = StoryObj<typeof AppButton>

export const Primary: Story = {
  render: (args) => ({
    components: { AppButton },
    setup() {
      return { args }
    },
    template: '<AppButton v-bind="args" />',
  }),
  args: {
    class: 'bg-red-500',
    disabled: false,
    label: 'Button',
  },
}
