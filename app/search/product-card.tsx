'use client';

import { Product } from '@/lib/bff';
import { sendGTMEvent } from '@next/third-parties/google';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { ProductPrice } from '@/components/molecules/ProductPrice';

export default function ProductCard({ product }: { product: Product }) {
  const imageUrl =
    product.imageUrl || 'https://via.placeholder.com/300x300?text=Sem+Imagem';

  return (
    <div className="group bg-white border border-slate-200 rounded-xl p-3 flex flex-col gap-3 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square bg-slate-50 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              'https://via.placeholder.com/300x300?text=Erro+ao+carregar';
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <Typography 
          variant="h3" 
          weight="semibold" 
          className="text-slate-800 text-sm line-clamp-2 h-10 leading-snug group-hover:text-blue-600 transition-colors"
        >
          {product.name}
        </Typography>

        <div className="flex items-baseline gap-1 mt-1">
          <Typography variant="span" weight="medium" className="text-xs text-slate-500">
            R$
          </Typography>
          <ProductPrice 
            price={product.price || 0} 
            currency="" 
          />
        </div>
      </div>

      <Button
        as="a"
        href={product.link || '#'}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        className="mt-auto w-full py-2.5 px-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-blue-600 transition-all duration-300 active:scale-95 text-center"
        onClick={() =>
          sendGTMEvent({
            event: 'shelf_add_to_cart',
            productId: product.productId,
            productName: product.name,
            price: product.price,
          })
        }
      >
        Ver Detalhes
      </Button>
    </div>
  );
}
