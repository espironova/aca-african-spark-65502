'use client'
import dynamic from 'next/dynamic'

const TravelDynamic = dynamic(() => import('../../../routes/services/Travel'), { ssr: false })

export function TravelClient() {
  return <TravelDynamic />
}
