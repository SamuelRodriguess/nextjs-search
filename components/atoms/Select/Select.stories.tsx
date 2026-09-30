'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    label: 'Choose an option',
    children: [
      {'value': '1', 'children': 'Option 1'},
      {'value': '2', 'children': 'Option 2'},
      {'value': '3', 'children': 'Option 3'},
    ]
  },
}
