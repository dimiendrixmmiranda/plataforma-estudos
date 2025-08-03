'use client'

import Link from "next/link"

interface SubmateriasNavegacaoProps {
    arrayDeMaterias: { texto: string, id: string, introducao: string }[]
}

export default function SubmateriasNavegacao({ arrayDeMaterias }: SubmateriasNavegacaoProps) {
    return (
        <ul className="list-disc ml-6 flex flex-col gap-4">
            {
                arrayDeMaterias.map((materia, i) => {
                    return (
                        <li key={i} className="text-start bg-azul-escuro text-white p-4">
                            <Link href={`#${materia.id}`}>
                                <p><b>{materia.texto}</b>: {materia.introducao}</p>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}