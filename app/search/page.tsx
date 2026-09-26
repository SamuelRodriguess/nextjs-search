import { searchProducts } from '@/lib/bff';
import ProductCard from './product-card';
import { updateSearch } from './actions';
import { Suspense } from 'react';

async function SearchContent({
  searchParams,
}: {
  searchParams: { q?: string; limit?: string };
}) {
  const { q = 'piso', limit = '50' } = searchParams;
  
  let products: any[] = [];
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
        <div>
          <h1 className="text-3xl font-bold">Product Shelf</h1>
          <p className="text-gray-500">Found {total} products for "{q}"</p>
        </div>

        <form action={updateSearch} className="flex gap-2">
          <input 
            name="term" 
            defaultValue={q} 
            placeholder="Search products..." 
            className="border p-2 rounded-md"
          />
          <input 
            name="count" 
            defaultValue={limit} 
            type="number" 
            className="border p-2 rounded-md w-20"
          />
          <button 
            type="submit" 
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Search
          </button>
        </form>
      </header>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No products found matching your search.
        </div>
      )}
    </>
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; limit?: string }>;
}) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Suspense fallback={<div className="text-center py-20">Loading products...</div>}>
        <SearchPageContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function SearchPageContent({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; limit?: string }>;
}) {
  const params = await searchParams;
  return <SearchContent searchParams={params} />;
}
