'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '@/data/hook/useAuth'

export default function RotaProtegida({ children }: { children: React.ReactNode }) {
    const { usuario, carregando } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!carregando && !usuario) {
            router.push('/')
        }
    }, [carregando, usuario])

    if (carregando || !usuario) {
        return <div>Carregando...</div>
    }

    return <>{children}</>
}
