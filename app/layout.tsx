import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
});
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});
const _fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: '21-Day Anti-Inflammation Program | Feel Lighter in 14 Days',
  description: 'A beginner-friendly 21-day program to reduce inflammation, improve gut health, and feel lighter. Includes daily guides, meal plans, shopping lists, and supplement protocols.',
  generator: 'v0.app',
  keywords: ['anti-inflammation', 'gut health', 'wellness program', '21 day reset', 'meal plan', 'supplements'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#3d7a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_geist.variable} ${_geistMono.variable} ${_fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
