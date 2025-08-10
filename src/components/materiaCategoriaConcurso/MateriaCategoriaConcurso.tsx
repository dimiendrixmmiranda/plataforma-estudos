'use client'

import Link from "next/link"
import { FaCheckSquare, FaRegSquare } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"

interface MateriaCategoriaConcursoProps {
    materia: string
    visible: boolean
    onToggle: () => void
    submaterias: { nome: string, slug: string, id: string }[]
    materiaConcluida: (id: string) => void
    materiasCompletas: string[]
}

export default function MateriaCategoriaConcurso({ materia, visible, onToggle, submaterias, materiaConcluida, materiasCompletas }: MateriaCategoriaConcursoProps) {
    return (
        <div>
            <div
                className="p-4 bg-zinc-400 text-white font-bold cursor-pointer flex items-center"
                onClick={onToggle}
            >
                {
                    visible ? (
                        <IoIosArrowDown />
                    ) : (
                        <IoIosArrowForward />
                    )
                }
                <h2>
                    {materia}
                </h2>
            </div>
            <ul className={`${visible ? 'flex' : 'hidden'} flex-col p-2`}>
                {
                    submaterias.map((sub) => {
                        const concluida = materiasCompletas.includes(sub.id)

                        return (
                            <li key={sub.id} className={`p-3 text-white flex justify-between items-center ${concluida ? 'bg-green-500' : 'bg-zinc-700'}`}>
                                <Link href={sub.slug}>{sub.nome}</Link>
                                <button
                                    onClick={() => materiaConcluida(sub.id)}
                                    className="flex justify-center items-center text-2xl cursor-pointer"
                                    aria-label={`Marcar ${sub.nome} como ${concluida ? 'não concluída' : 'concluída'}`}
                                >
                                    {concluida ? <FaCheckSquare /> : <FaRegSquare />}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
