'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'destructive'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Default Badge',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Badge',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Badge',
    variant: 'outline',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Badge',
    variant: 'destructive',
  },
}
