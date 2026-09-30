'use client'
import React from 'react'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'

export interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  placeholder?: string
  buttonText?: string
}

export const SearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Search...',
  buttonText = 'Search',
}: SearchInputProps) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <Button onClick={onSearch} variant="primary">
        {buttonText}
      </Button>
    </div>
  )
}
