'use client'
import React from 'react'
import { Label } from '../../atoms/Label'
import { Input } from '../../atoms/Input'

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const FormField = ({
  label,
  error,
  className = '',
  ...props
}: FormFieldProps) => {
  return (
    <div className={`grid gap-1.5 ${className}`}>
      <Label htmlFor={props.id}>{label}</Label>
      <Input {...props} />
      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  )
}
