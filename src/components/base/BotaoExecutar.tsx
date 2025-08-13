'use client'
import Link from "next/link";

interface BotaoExecutarProps {
    texto: string
    link: string
}

// Vai ser utilizado tanto para o botao realizar exercicio quanto para o realizar simulado
export default function BotaoExecutar({ texto, link }: BotaoExecutarProps) {
    return (
        <Link
            href={link}
            className="bg-amarelo uppercase font-black text-xl text-white flex justify-center items-center py-2"
            style={{ textShadow: '1px 1px 2px black', boxShadow: '1px 1px 2px black' }}
        >
            {texto}
        </Link >
    )
}