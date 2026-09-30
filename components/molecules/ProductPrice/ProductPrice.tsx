'use client'
import React from 'react'
import { Typography } from '../../atoms/Typography'

export interface ProductPriceProps {
  price: number
  currency: string
  originalPrice?: number
}

export const ProductPrice = ({
  price,
  currency,
  originalPrice,
}: ProductPriceProps) => {
  return (
    <div className="flex items-baseline space-x-2">
      <Typography variant="span" weight="bold" className="text-lg">
        {currency}
        {price.toFixed(2)}
      </Typography>
      {originalPrice && originalPrice > price && (
        <Typography variant="caption" className="line-through text-zinc-500">
          {currency}
          {originalPrice.toFixed(2)}
        </Typography>
      )}
    </div>
  )
}
