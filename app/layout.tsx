import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js SPA patterns',
  description:
    'Runnable demos for the Next.js Single-Page Applications guide, including client libraries with server-provided initial data.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
        <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
