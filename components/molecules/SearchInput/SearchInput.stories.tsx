'use client'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'
import { useState } from 'react'

const meta: Meta<typeof SearchInput> = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  args: {
    placeholder: 'Search products...',
    buttonText: 'Search',
  },
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <SearchInput
        {...args}
        value={value}
        onChange={setValue}
        onSearch={() => alert(`Searching for: ${value}`)}
      />
    )
  },
}
