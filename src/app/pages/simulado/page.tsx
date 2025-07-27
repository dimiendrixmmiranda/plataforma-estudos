'use client'

import Template from "@/components/template/Template"

export default function Page() {
    return (
        <Template>
            <div className="min-h-[78vh] p-4 bg-zinc-300 text-black">
                <form>
                    <fieldset>
                        <label htmlFor="categoria-concurso">Categoria do Concurso</label>
                        <select name="categoria-concurso" id="categoria-concurso">
                            <option value="">Selecione</option>
                            <option value="agente-de-combate-a-endemias">Agente de Endemias</option>
                            <option value="agente-comunitario-de-saude">Agente Comunitário de Saúde</option>
                            <option value="assistente-administrativo">Assistente Administrativo</option>
                            <option value="atendente-de-farmacia">Atendente de Farmácia</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="portugues">Portugues</label>
                            <input type="text" name="portugues" id="portugues" />
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="matematica">Matemática</label>
                            <input type="text" name="matematica" id="matematica" />
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="conhecimento-geral">Conhecimento Geral</label>
                            <input type="text" name="conhecimento-geral" id="conhecimento-geral" />
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="conhecimento-especifico">Conhecimento Específico</label>
                            <input type="text" name="conhecimento-especifico" id="conhecimento-especifico" />
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="informatica">Informática</label>
                            <input type="text" name="informatica" id="informatica" />
                        </fieldset>
                    </fieldset>
                    <button>Iniciar</button>
                </form>
            </div>
        </Template>
    )
}