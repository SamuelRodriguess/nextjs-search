'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from './FormField'

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormField>

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    id: 'username',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'example@mail.com',
    id: 'email',
    error: 'Please enter a valid email address',
  },
}
