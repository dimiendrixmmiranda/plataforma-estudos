'use client'

import Link from "next/link";
interface AncoraProps{
    link: string
}

export default function Ancora({link}: AncoraProps) {
    return (
        <Link href={link} className="uppercase font-bold text-2xl bg-amarelo text-white flex justify-center items-center py-1 mt-4" style={{ boxShadow: '0 0 2px 2px black', textShadow: '1px 1px 2px black' }}>
            Voltar
        </Link>
    )
}