import type { Metadata } from 'next'
import './globals.css'
import '../style.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Summarist',
  description: 'Your book summary platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        {children}
        <Script src="https://kit.fontawesome.com/870434be51.js" crossOrigin="anonymous" />
      </body>
    </html>
  )
}
