'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    label: 'Notifications enabled',
  },
}

export const On: Story = {
  args: {
    label: 'Enabled',
    checked: true,
  },
}
