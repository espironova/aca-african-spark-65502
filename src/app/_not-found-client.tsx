'use client'
import dynamic from 'next/dynamic'

const NotFoundDynamic = dynamic(() => import('../routes/NotFound'), { ssr: false })

export function NotFoundClient() {
  return <NotFoundDynamic />
}
