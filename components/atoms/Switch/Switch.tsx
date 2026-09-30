'use client'
import React from 'react'

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Switch = ({ label, className = '', ...props }: SwitchProps) => {
  const id = props.id || `switch-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          id={id}
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div className="peer h-6 w-11 rounded-full bg-zinc-300 transition-colors peer-checked:bg-foreground after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-background after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  )
}
