import type { Metadata } from 'next'
import { BusinessClient } from './_client'

export const metadata: Metadata = {
  title: "Business Insurance Kenya",
  description: "Comprehensive business insurance solutions for Kenyan SMEs and corporates. Protect your assets, staff, and operations.",
}

export default function BusinessPage() {
  return <BusinessClient />
}
