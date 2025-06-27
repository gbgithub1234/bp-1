// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Big Picture',
  description: 'Higher ed process visualization',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
