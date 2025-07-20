'use client'

import RotaProtegida from "@/components/rotaProtegida/RotaProtegida"
import useAuth from "@/data/hook/useAuth"
import Link from "next/link"
import { useState } from "react"

export default function PaginaMaterias() {
    const { logout } = useAuth()

    const [visible, setVisible] = useState<string | null>(null)

    const toggle = (id: string) => {
        setVisible(prev => (prev === id ? null : id))
    }


    return (
        <RotaProtegida>
            <div className="bg-zinc-300 text-black min-h-screen p-4 flex flex-col">
                <div className="flex flex-col gap-4">
                    <h2 className="uppercase font-black text-2xl leading-6">Selecione um cargo para estudo:</h2>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <li className="flex flex-col cursor-pointer">
                            <button onClick={() => toggle('endemias')} className="bg-azul-escuro text-white uppercase font-bold leading-5 w-full h-[80px] mx-auto text-sm md:text-base">
                                Agente de Combate de Endemias
                            </button>
                            <ul className={`${visible === 'endemias' ? 'block' : 'hidden'} bg-amarelo`}>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/portugues'}>
                                        Portugues
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/matematica'}>
                                        Matemática
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/informatica'}>
                                        Informática
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias'}>
                                        Conhecimento Específico
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="flex flex-col cursor-pointer">
                            <button onClick={() => toggle('saude')} className="bg-azul-escuro text-white uppercase font-bold leading-5 w-full h-[80px] mx-auto text-sm md:text-base">
                                Agente Comunitário de Saúde
                            </button>
                            <ul className={`${visible === 'saude' ? 'block' : 'hidden'} bg-amarelo`}>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/portugues'}>
                                        Portugues
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/matematica'}>
                                        Matemática
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/informatica'}>
                                        Informática
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias'}>
                                        Conhecimento Específico
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="flex flex-col cursor-pointer">
                            <button onClick={() => toggle('administrativo')} className="bg-azul-escuro text-white uppercase font-bold leading-5 w-full h-[80px] mx-auto text-sm md:text-base">
                                Auxiliar Administrativo
                            </button>
                            <ul className={`${visible === 'administrativo' ? 'block' : 'hidden'} bg-amarelo`}>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/portugues'}>
                                        Portugues
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/matematica'}>
                                        Matemática
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias/informatica'}>
                                        Informática
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link className="uppercase font-bold text-white text-center flex justify-center items-center text-sm md:text-base" style={{textShadow: '1px 1px 2px black'}} href={'/pages/materias'}>
                                        Conhecimento Específico
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button onClick={logout} className="mt-auto bg-red-600 uppercase font-bold text-lg text-white max-w-[120px] py-2 ml-auto w-full" style={{textShadow: '1px 1px 2px black'}}>Logout</button>
            </div>
        </RotaProtegida>
    )
}
