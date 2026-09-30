import { http, HttpResponse } from 'msw'

export const mswHandlers = [
  http.post('http://localhost:4000/graphql', async ({ request }) => {
    const body = await request.json() as { query: string }
    if (body?.query?.includes('searchProducts')) {
      return HttpResponse.json({
        data: {
          searchProducts: {
            products: [
              {
                productId: '1',
                name: 'Mock Product 1',
                price: 100.0,
                imageUrl: 'https://via.placeholder.com/150',
                sellers: [{ commertialOffer: { Price: 100.0 } }],
              },
              {
                productId: '2',
                name: 'Mock Product 2',
                price: 200.0,
                imageUrl: 'https://via.placeholder.com/150',
                sellers: [{ commertialOffer: { Price: 200.0 } }],
              },
            ],
            total: 2,
          },
        },
      })
    }
    return HttpResponse.json({ data: null })
  }),
]
