'use client'
import dynamic from 'next/dynamic'

const ServicesDynamic = dynamic(() => import('../../routes/Services'), { ssr: false })

export function ServicesClient() {
  return <ServicesDynamic />
}
