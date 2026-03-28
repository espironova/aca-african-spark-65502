'use client'
import dynamic from 'next/dynamic'

const MotorDynamic = dynamic(() => import('../../../routes/services/Motor'), { ssr: false })

export function MotorClient() {
  return <MotorDynamic />
}
