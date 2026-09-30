'use client'
import React from 'react'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = ({ label, className = '', ...props }: CheckboxProps) => {
  const id = props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-zinc-300 text-foreground focus:ring-ring cursor-pointer disabled:opacity-50"
        {...props}
      />
      {label && (
        <label 
          htmlFor={id} 
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
    </div>
  )
}
