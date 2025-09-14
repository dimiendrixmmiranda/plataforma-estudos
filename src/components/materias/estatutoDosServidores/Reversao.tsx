import AncoraLink from "@/components/base/AncoraLink";
import TituloMateria from "@/components/base/TituloMateria";
import ReproduzirTexto from "@/components/reproduzirTexto/ReproduzirTexto";
import { estatutoDosServidoresDeJoaquimTavora } from "@/constants/estatutoDosServidoresJoaquimTavora";

export default function Reversao() {
    console.log(estatutoDosServidoresDeJoaquimTavora)
    return (
        <div className="p-4 bg-zinc-300 text-black min-h-[77vh] flex flex-col gap-3">
            <TituloMateria texto={`${estatutoDosServidoresDeJoaquimTavora["da-reversao"].titulo}`} />
            {
                estatutoDosServidoresDeJoaquimTavora["da-reversao"].arrayDeArtigos.map((artigo, i) => {
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
                            <div>
                                <div className="flex items-center">
                                    <h3 className="flex-1">Explicação:</h3>
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
                            <div>
                                <div className="flex items-center">
                                    <h3 className="flex-1">Exemplo Prático:</h3>
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
                            <div>
                                <div className="flex items-center">
                                    <h3 className="flex-1">Observações:</h3>
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
                <AncoraLink link="/pages/materias/estatutoDosServidores/da-disponibilidade-e-do-aproveitamento" texto="Anterior" />
                <AncoraLink link="/pages/materias/estatutoDosServidores/da-movimentacao-de-pessoal-disposicoes-gerais" texto="Próximo" />
            </div>
        </div>
    )
}