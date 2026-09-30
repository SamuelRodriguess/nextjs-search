'use client'
import React from 'react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export const Select = ({ label, className = '', ...props }: SelectProps) => {
  const id = props.id || `select-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label htmlFor={id} className="text-sm font-medium">{label}</label>}
      <select
        id={id}
        className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  )
}
