import type { Metadata } from 'next'
import './globals.css'
import SplashScreen from '@/components/SplashScreen'

export const metadata: Metadata = {
  title: 'CodePloy - Transform Ideas Into Digital Reality | Premium Development Agency',
  description: 'Award-winning digital agency specializing in web & mobile development, UI/UX design, AI solutions, and digital transformation. 250+ successful projects delivered worldwide.',
  keywords: 'web development, mobile app development, UI/UX design, digital marketing, AI solutions, automation, brand building, digital agency, software development',
  authors: [{ name: 'CodePloy' }],
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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <SplashScreen />  {/* Add this line */}
        {children}
      </body>
    </html>
  )
}