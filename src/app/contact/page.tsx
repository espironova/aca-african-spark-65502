import type { Metadata } from 'next'
import { ContactClient } from './_client'

export const metadata: Metadata = {
  title: "Contact ACA Insurance Agency",
  description: "Get in touch with ACA Insurance Agency. Call +254722906974 or visit us in Nairobi CBD for a free consultation.",
}

export default function ContactPage() {
  return <ContactClient />
}
