import type { Metadata } from 'next'
import { IndexClient } from './_client'

export const metadata: Metadata = {
  title: "ACA Insurance Agency - The Future is Safe | Trusted Insurance in Kenya",
  description: "ACA Insurance Agency offers affordable, reliable insurance for Kenyan families and businesses. Licensed by IRA Kenya.",
}

export default function IndexPage() {
  return <IndexClient />
}
