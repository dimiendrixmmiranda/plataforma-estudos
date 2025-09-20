// components/ui/meteors.tsx
"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Meteor = {
    id: number
    left: string
    length: number   // px (altura do traço)
    thickness: number // px (largura do traço)
    duration: number
    delay: number
}

export function Meteors({ number = 18 }: { number?: number }) {
    const [meteors, setMeteors] = useState<Meteor[]>([])

    useEffect(() => {
        const arr: Meteor[] = []
        for (let i = 0; i < number; i++) {
            arr.push({
                id: i,
                left: `${Math.random() * 100}vw`,
                length: Math.floor(Math.random() * 120) + 40, // 40px - 160px
                thickness: Math.random() * 2 + 1, // 1px - 3px
                duration: Math.random() * 2 + 2, // 2s - 4s
                delay: Math.random() * 6,
            })
        }
        setMeteors(arr)
    }, [number])

    return (
        <>
            {meteors.map((m) => (
                <motion.span
                    key={m.id}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        y: ["0vh", "110vh"], // cai de cima pra baixo
                    }}
                    transition={{
                        duration: m.duration,
                        delay: m.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        left: m.left,
                        top: "-10vh", // começa acima da viewport
                        width: `${m.thickness}px`, // fino (vertical)
                        height: `${m.length}px`, // longo (vertical)
                        borderRadius: 9999,
                        background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.2), transparent)",
                        transformOrigin: "top center",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
            ))}
        </>
    )
}
