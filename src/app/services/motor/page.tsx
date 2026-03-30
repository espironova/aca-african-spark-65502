import type { Metadata } from 'next'
import { MotorClient } from './_client'

export const metadata: Metadata = {
  title: "Motor Vehicle Insurance Kenya",
  description: "Comprehensive and third-party motor vehicle insurance tailored for Kenyan drivers. Get covered today with ACA Insurance Agency.",
}

export default function MotorPage() {
  return <MotorClient />
}
