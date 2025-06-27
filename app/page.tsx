// app/page.tsx
'use client'

import Canvas from '@/components/Canvas'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white flex items-center justify-center">
      <Canvas />
    </main>
  )
}
