import AncoraLink from "@/components/base/AncoraLink";
import TituloMateria from "@/components/base/TituloMateria";
import ReproduzirTexto from "@/components/reproduzirTexto/ReproduzirTexto";
import { estatutoDosServidoresDeJoaquimTavora } from "@/constants/estatutoDosServidoresJoaquimTavora";

export default function VencimentoRemuneracao() {
    return (
        <div className="p-4 bg-zinc-300 text-black min-h-[77vh] flex flex-col gap-3">
            <TituloMateria texto={`${estatutoDosServidoresDeJoaquimTavora["do-vencimento-e-da-remuneracao"].titulo}`} />
            {
                estatutoDosServidoresDeJoaquimTavora["do-vencimento-e-da-remuneracao"].arrayDeArtigos.map((artigo, i) => {
                    return (
                        <div key={i} className="flex flex-col gap-4 pb-6 border-b-2 border-azul-escuro">
                            <h2>{artigo.artigo}</h2>
                            <ReproduzirTexto
                                reduzida={false}
                                texto={
                                    Array.isArray(artigo.artigo)
                                        ? artigo.artigo.join(' ')
                                        : artigo.artigo
                                }
                            />
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center">
                                    <h3 className="flex-1 font-bold text-lg">Explicação:</h3>
                                    <ReproduzirTexto
                                        reduzida={true}
                                        texto={
                                            Array.isArray(artigo.explicacao)
                                                ? artigo.explicacao.join(' ')
                                                : artigo.explicacao
                                        }
                                    />
                                </div>
                                <p>{artigo.explicacao}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center">
                                    <h3 className="flex-1 font-bold text-lg">Exemplo Prático:</h3>
                                    <ReproduzirTexto
                                        reduzida={true}
                                        texto={
                                            Array.isArray(artigo.exemploPratico)
                                                ? artigo.exemploPratico.join(' ')
                                                : artigo.exemploPratico
                                        }
                                    />
                                </div>
                                <p>{artigo.exemploPratico}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center">
                                    <h3 className="flex-1 font-bold text-lg">Observações:</h3>
                                    <ReproduzirTexto
                                        reduzida={true}
                                        texto={
                                            Array.isArray(artigo.observacao)
                                                ? artigo.observacao.join(' ')
                                                : artigo.observacao
                                        }
                                    />
                                </div>
                                <ul className="list-disc ml-6">
                                    {artigo.observacao.map((obs, i) => {
                                        return (
                                            <li key={i}>
                                                <p>{obs}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            <div className="grid grid-cols-2 gap-2">
                <AncoraLink link="/pages/materias/estatutoDosServidores/da-readaptacao" texto="Anterior" />
                <AncoraLink link="/pages/materias/estatutoDosServidores/" texto="Próximo" /> 
            </div>
        </div>
    )
}