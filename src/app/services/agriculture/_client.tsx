'use client'
import dynamic from 'next/dynamic'

const AgricultureDynamic = dynamic(() => import('../../../routes/services/Agriculture'), { ssr: false })

export function AgricultureClient() {
  return <AgricultureDynamic />
}
