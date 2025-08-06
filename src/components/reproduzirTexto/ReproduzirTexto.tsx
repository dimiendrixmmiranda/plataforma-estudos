'use client'

import { useState, useRef, useEffect } from 'react'

interface ReproduzirTextoProps {
    texto: string
}

export default function ReproduzirTexto({ texto }: ReproduzirTextoProps) {
    const [status, setStatus] = useState<'idle' | 'playing' | 'paused'>('idle')
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

    const handleClick = () => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
            alert('Seu navegador não suporta a leitura de texto (Text-to-Speech).')
            return
        }

        if (status === 'idle') {
            const utterance = new SpeechSynthesisUtterance(texto)
            utterance.lang = 'pt-BR'
            utterance.rate = 1.15

            utterance.onend = () => setStatus('idle') // resetar quando terminar
            utterance.onerror = () => setStatus('idle')

            utteranceRef.current = utterance
            window.speechSynthesis.speak(utterance)
            setStatus('playing')
        } else if (status === 'playing') {
            window.speechSynthesis.pause()
            setStatus('paused')
        } else if (status === 'paused') {
            window.speechSynthesis.resume()
            setStatus('playing')
        }
    }

    // Cleanup ao desmontar componente
    useEffect(() => {
        return () => {
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel()
            }
        }
    }, [])

    return (
        <div>
            <button
                onClick={handleClick}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {status === 'playing' ? '⏸️ Pausar' : status === 'paused' ? '▶️ Continuar' : '🔊 Reproduzir'}
            </button>
        </div>
    )
}
