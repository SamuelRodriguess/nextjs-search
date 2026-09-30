'use server'

import { redirect } from 'next/navigation'

export async function updateSearch(formData: FormData) {
  const term = formData.get('term') as string
  const count = formData.get('count') as string

  // Redirect to the same page with search params
  // This is the standard Next.js pattern for search/filters
  const params = new URLSearchParams()
  if (term) params.set('q', term)
  if (count) params.set('limit', count)

  redirect(`/search?${params.toString()}`)
}

export async function toggleWishlist(productId: string) {
  // Simulate a mutation
  console.log(`Toggling wishlist for product: ${productId}`)
  // In a real app, this would call the BFF / database
  return { success: true }
}
