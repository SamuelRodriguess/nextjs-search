import { searchProducts } from '@/lib/bff';
import ProductCard from './product-card';
import { Suspense } from 'react';
import SearchForm from './search-form';
import { Typography } from '@/components/atoms/Typography';
import { Product } from '@/lib/bff';

async function SearchContent({
  searchParams,
}: {
  searchParams: { q?: string; limit?: string }
}) {
  const { q = 'Piso Vinílico', limit = '50' } = searchParams;

  let products: Product[] = [];
  let total = 0;

  try {
    const result = await searchProducts(q, parseInt(limit));
    products = result.products;
    total = result.total;
  } catch (e) {
    console.error('Search failed:', e);
  }

  return (
    <>
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <Typography variant="h1" weight="bold" className="text-3xl">
            Product Shelf
          </Typography>
          <Typography variant="p" className="text-gray-500">
            Found {total} products for "{q}"
          </Typography>
        </div>

        <SearchForm defaultTerm={q} defaultLimit={limit} />
      </header>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <Typography variant="p">
            No products found matching your search.
          </Typography>
        </div>
      )}
    </>
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; limit?: string }>
}) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Suspense
        fallback={<div className="text-center py-20">Loading products...</div>}
      >
        <SearchPageContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function SearchPageContent({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; limit?: string }>
}) {
  const params = await searchParams;
  return <SearchContent searchParams={params} />;
}
