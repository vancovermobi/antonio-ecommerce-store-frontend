import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import ToastProvider from '@/providers/toast-provider'
import ModalProvider from '@/providers/modal-provider'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })
const label = ""
const logo = '/logo-camel.webp'

export const metadata: Metadata = {
  title: 'Camel',
  description: 'Camel - Chất liệu da 100%',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>

        <ToastProvider />

        <ModalProvider />

        <Navbar label={ label } logo={ logo }/>

        {children}

        <Footer />
      </body>
    </html>
  )
}
