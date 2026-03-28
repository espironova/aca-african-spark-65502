'use client'
import dynamic from 'next/dynamic'

const AboutUsDynamic = dynamic(() => import('../../routes/AboutUs'), { ssr: false })

export function AboutUsClient() {
  return <AboutUsDynamic />
}
