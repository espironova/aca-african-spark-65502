'use client'
import dynamic from 'next/dynamic'

const IndexDynamic = dynamic(() => import('../routes/Index'), { ssr: false })

export function IndexClient() {
  return <IndexDynamic />
}
