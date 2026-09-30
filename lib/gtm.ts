'use client'

/**
 * Dispatches a custom event to Google Tag Manager.
 * @param eventName Event name (e.g., 'shjelf_product_view')
 * @param params Additional event parameters
 */
export function sendGTMEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    ;(window as any).dataLayer.push({
      event: eventName,
      ...params,
    })
  } else {
    console.warn('[GTM] dataLayer not found. Event not sent:', eventName)
  }
}
