'use client'
import dynamic from 'next/dynamic'

const MedicalDynamic = dynamic(() => import('../../../routes/services/Medical'), { ssr: false })

export function MedicalClient() {
  return <MedicalDynamic />
}
