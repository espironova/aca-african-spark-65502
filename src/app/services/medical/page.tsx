import type { Metadata } from 'next'
import { MedicalClient } from './_client'

export const metadata: Metadata = {
  title: "Medical & Health Insurance Kenya",
  description: "Affordable medical insurance for individuals and families in Kenya. Access quality healthcare without the financial burden.",
}

export default function MedicalPage() {
  return <MedicalClient />
}
