import type { Metadata } from 'next'
import { AboutUsClient } from './_client'

export const metadata: Metadata = {
  title: "About ACA Insurance Agency",
  description: "Learn about ACA Insurance Agency — our mission, team, and commitment to protecting Kenyan families and businesses since our founding.",
}

export default function AboutUsPage() {
  return <AboutUsClient />
}
