'use client'
import React from 'react'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
}

export const Spinner = ({ size = 'md', className = '', label = 'Loading...' }: SpinnerProps) => {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-4',
    lg: 'h-12 w-12 border-4',
  }
  return (
    <div className={`flex justify-center ${className}`} role="status" aria-live="polite">
      <div 
        className={`${sizes[size]} animate-spin rounded-full border-zinc-200 border-t-foreground`}
        aria-hidden="true"
      ></div>
      <span className="sr-only">{label}</span>
    </div>
  )
}
