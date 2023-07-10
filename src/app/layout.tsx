import '../styles/globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navigation/Navbar'
import Footer from "@/components/navigation/Footer";
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Edelgase',
  description: 'Die Edelgase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
          className={cn('bg-white text-slate-900 antialiased', inter.className)}>
    <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
      {/* /@ts-expect-error Server Component */}
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </body>
    </html>
  )
}
