'use client';

import { Product } from '@/lib/bff';

export default function ProductCard({ product }: { product: Product }) {
  const imageUrl = product.imageUrl || 'https://via.placeholder.com/300x300?text=Sem+Imagem';

  return (
    <div className="group bg-white border border-slate-200 rounded-xl p-3 flex flex-col gap-3 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square bg-slate-50 rounded-lg overflow-hidden">
        <img 
          src={imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=Erro+ao+carregar';
          }}
        />
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className="text-slate-800 font-semibold text-sm line-clamp-2 h-10 leading-snug group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-xs font-medium text-slate-500">R$</span>
          <p className="text-xl font-extrabold text-slate-900">
            {product.price ? product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : 'Indisponível'}
          </p>
        </div>
      </div>

      <a 
        href={product.link || '#'} 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full py-2.5 px-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-blue-600 transition-all duration-300 active:scale-95 text-center"
      >
        Ver Detalhes
      </a>
    </div>
  );
}
