import type { Metadata } from 'next'
import './globals.css'
import PageLoadAnimation from '@/components/PageLoadAnimation'

export const metadata: Metadata = {
  title: 'CodePloy - Transform Ideas Into Digital Reality | Premium Development Agency',
  description: 'Award-winning digital agency specializing in web & mobile development, UI/UX design, AI solutions, and digital transformation. 250+ successful projects delivered worldwide.',
  keywords: 'web development, mobile app development, UI/UX design, digital marketing, AI solutions, automation, brand building, digital agency, software development',
  authors: [{ name: 'CodePloy' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'CodePloy - Deploy Innovation',
    description: 'Transform your ideas into stunning digital reality with cutting-edge technology',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodePloy - Deploy Innovation',
    description: 'Premium digital solutions for modern businesses',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {/* <PageLoadAnimation /> */}
        {children}
      </body>
    </html>
  )
}