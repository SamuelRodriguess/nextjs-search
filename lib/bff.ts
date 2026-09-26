export type Product = {
  productId: string;
  name: string;
  price?: number;
  link?: string;
  imageUrl?: string;
};

export type SearchResponse = {
  products: Product[];
  total: number;
};

const BFF_URL = process.env.BFF_URL || 'http://localhost:4000/graphql';

async function fetchBFF<T>(query: string, variables = {}): Promise<T> {
  const res = await fetch(BFF_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // Cache for 1 minute
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error(`BFF Error: ${json.errors[0].message}`);
  }
  return json.data;
}

export async function searchProducts(term: string, count: number = 50): Promise<SearchResponse> {
  const query = `
    query SearchProducts($term: String!, $count: Float!) {
      searchProducts(query: $term, count: $count) {
        total
        products {
          productId
          name
          price
          link
          imageUrl
        }
      }
    }
  `;

  const data = await fetchBFF<{ searchProducts: SearchResponse }>(query, { term, count });
  return data.searchProducts;
}
