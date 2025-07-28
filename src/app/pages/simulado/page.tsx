'use client'

import Template from "@/components/template/Template"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
    const router = useRouter()

    const [categoria, setCategoria] = useState('')
    const [qtdePerguntasPortugues, setQtdePerguntasPortugues] = useState('')
    const [qtdePerguntasMatematica, setQtdePerguntasMatematica] = useState('')
    const [qtdePerguntasGeral, setQtdePerguntasGeral] = useState('')
    const [qtdePerguntasEspecifico, setQtdePerguntasEspecifico] = useState('')
    const [qtdePerguntasInformatica, setQtdePerguntasInformatica] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        router.push(`/pages/simulado/materia?categoria=${categoria}&portugues=${qtdePerguntasPortugues}&matematica=${qtdePerguntasMatematica}&geral=${qtdePerguntasGeral}&especifico=${qtdePerguntasEspecifico}&informatica=${qtdePerguntasInformatica}`)
    }

    return (
        <Template>
            <div className="min-h-[78vh] p-4 bg-zinc-300 text-black">
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    <fieldset className="flex flex-col w-full gap-1">
                        <label className="leading-5 uppercase font-bold" htmlFor="categoria-concurso">Categoria do Concurso</label>
                        <select name="categoria-concurso" id="categoria-concurso" className="p-2 font-semibold rounded-md" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="agente-de-combate-a-endemias">Agente de Endemias</option>
                            <option value="agente-comunitario-de-saude">Agente Comunitário de Saúde</option>
                            <option value="assistente-administrativo">Assistente Administrativo</option>
                            <option value="atendente-de-farmacia">Atendente de Farmácia</option>
                        </select>
                    </fieldset>
                    <fieldset className="grid grid-cols-2 w-full gap-2">
                        <fieldset className="flex flex-col w-full gap-1">
                            <label className="leading-5 uppercase font-bold" htmlFor="portugues">Portugues</label>
                            <input className="p-2 font-semibold rounded-md w-full appearance-auto" max={25} type="number" step={1} name="portugues" id="portugues" value={qtdePerguntasPortugues} onChange={(e) => setQtdePerguntasPortugues(e.target.value)} />
                        </fieldset>
                        <fieldset className="flex flex-col w-full gap-1">
                            <label className="leading-5 uppercase font-bold" htmlFor="matematica">Matemática</label>
                            <input className="p-2 font-semibold rounded-md w-full appearance-auto" max={25} type="number" step={1} name="matematica" id="matematica" value={qtdePerguntasMatematica} onChange={(e) => setQtdePerguntasMatematica(e.target.value)} />
                        </fieldset>
                        <fieldset className="flex flex-col w-full gap-1">
                            <label className="leading-5 uppercase font-bold" htmlFor="conhecimento-geral">Conhecimento Geral</label>
                            <input className="p-2 font-semibold rounded-md w-full appearance-auto" max={20} type="number" step={1} name="conhecimento-geral" id="conhecimento-geral" value={qtdePerguntasGeral} onChange={(e) => setQtdePerguntasGeral(e.target.value)} />
                        </fieldset>
                        <fieldset className="flex flex-col w-full gap-1">
                            <label className="leading-5 uppercase font-bold" htmlFor="conhecimento-especifico">Conhecimento Específico</label>
                            <input className="p-2 font-semibold rounded-md w-full appearance-auto" max={25} type="number" step={1} name="conhecimento-especifico" id="conhecimento-especifico" value={qtdePerguntasEspecifico} onChange={(e) => setQtdePerguntasEspecifico(e.target.value)} />
                        </fieldset>
                        <fieldset className="flex flex-col w-full gap-1">
                            <label className="leading-5 uppercase font-bold" htmlFor="informatica">Informática</label>
                            <input className="p-2 font-semibold rounded-md w-full appearance-auto" max={10} type="number" step={1} name="informatica" id="informatica" value={qtdePerguntasInformatica} onChange={(e) => setQtdePerguntasInformatica(e.target.value)} />
                        </fieldset>
                    </fieldset>
                    <button className="bg-amarelo uppercase font-black text-xl text-white flex justify-center items-center py-2 w-full" style={{ textShadow: '1px 1px 2px black' }} type="submit">Iniciar</button>
                </form>
            </div>
        </Template>
    )
}