'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductPrice } from './ProductPrice'

const meta: Meta<typeof ProductPrice> = {
  title: 'Molecules/ProductPrice',
  component: ProductPrice,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductPrice>

export const Default: Story = {
  args: {
    price: 29.99,
    currency: '$',
  },
}

export const Discounted: Story = {
  args: {
    price: 19.99,
    originalPrice: 29.99,
    currency: '$',
  },
}
