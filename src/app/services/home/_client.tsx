'use client'
import dynamic from 'next/dynamic'

const HomeDynamic = dynamic(() => import('../../../routes/services/Home'), { ssr: false })

export function HomeClient() {
  return <HomeDynamic />
}
