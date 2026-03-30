import type { Metadata } from 'next'
import { AgricultureClient } from './_client'

export const metadata: Metadata = {
  title: "Agriculture Insurance Kenya",
  description: "Safeguard your farming investment with ACA's agriculture insurance. Coverage for crops, livestock, and farm equipment.",
}

export default function AgriculturePage() {
  return <AgricultureClient />
}
