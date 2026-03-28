'use client'
import dynamic from 'next/dynamic'

const BusinessDynamic = dynamic(() => import('../../../routes/services/Business'), { ssr: false })

export function BusinessClient() {
  return <BusinessDynamic />
}
