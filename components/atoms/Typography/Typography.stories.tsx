'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'p', 'span', 'caption'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Heading1: Story = {
  args: {
    children: 'This is an H1 Heading',
    variant: 'h1',
  },
}

export const Paragraph: Story = {
  args: {
    children:
      'This is a standard paragraph of text used for descriptions and body content.',
    variant: 'p',
  },
}

export const Caption: Story = {
  args: {
    children: 'This is a small caption text',
    variant: 'caption',
  },
}
