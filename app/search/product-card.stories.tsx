import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { expect } from 'storybook/test'
import ProductCard from './product-card'

const meta = {
  component: ProductCard,
  tags: ['ai-generated', 'needs-work'],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    product: {
      productId: '1',
      name: 'Mock Product 1',
      price: 100.0,
      imageUrl: 'https://via.placeholder.com/150',
      link: '/product/1',
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Mock Product 1/i)).toBeVisible()
    await expect(canvas.getByText(/100,00/i)).toBeVisible()
  },
}

export const CssCheck: Story = {
  args: {
    product: {
      productId: '1',
      name: 'Css Check Product',
      price: 100.0,
      imageUrl: 'https://via.placeholder.com/150',
      link: '/product/1',
    },
  },
  play: async ({ canvas }) => {
    const card = canvas.getByText(/Css Check Product/i).closest('div')
    // Verifying the white background of the card based on 'bg-white' class
    await expect(getComputedStyle(card!).backgroundColor).toBe(
      'rgb(255, 255, 255)',
    )
  },
}
