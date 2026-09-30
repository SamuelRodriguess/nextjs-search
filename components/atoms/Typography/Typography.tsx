'use client'
import React from 'react'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'caption'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
}

export const Typography = ({
  children,
  variant = 'p',
  weight = 'normal',
  className = '',
  ...props
}: TypographyProps) => {
  const Component = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
    caption: 'span',
  }[variant] as React.ElementType

  const variants = {
    h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    p: 'leading-7 [&:not(:first-child)]:mt-6',
    span: 'inline',
    caption: 'text-sm text-zinc-500 dark:text-zinc-400',
  }

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }

  return (
    <Component
      className={`${variants[variant]} ${weights[weight]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
