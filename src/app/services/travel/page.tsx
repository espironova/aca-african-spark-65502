import type { Metadata } from 'next'
import { TravelClient } from './_client'

export const metadata: Metadata = {
  title: "Travel Insurance Kenya",
  description: "Travel with confidence — ACA travel insurance covers medical emergencies, trip cancellations, and lost baggage worldwide.",
}

export default function TravelPage() {
  return <TravelClient />
}
