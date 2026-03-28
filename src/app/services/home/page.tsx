import type { Metadata } from 'next'
import { HomeClient } from './_client'

export const metadata: Metadata = {
  title: "Home & Property Insurance Kenya",
  description: "Protect your home and valuables with ACA's affordable home insurance plans. Cover for theft, fire, and natural disasters.",
}

export default function HomePage() {
  return <HomeClient />
}
