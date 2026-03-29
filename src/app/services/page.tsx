import type { Metadata } from 'next'
import { ServicesClient } from './_client'

export const metadata: Metadata = {
  title: "Insurance Products & Services",
  description: "Explore ACA Insurance Agency's full range of products: Motor, Home, Medical, Life, Business, Agriculture, and Travel insurance.",
}

export default function ServicesPage() {
  return <ServicesClient />
}
