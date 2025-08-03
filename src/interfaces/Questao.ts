import Alternativa from "./Alternativa"
import { Pergunta } from "./Pergunta"

export default interface Questao {
    id: number
    pergunta: Pergunta
    categoria: string
    alternativas: Alternativa[]
    respostaUsuario: string | null
    acertou: boolean
    justificativaResposta: string
    materia?: string // depois vai ser obrigatorio
    textoBaseId?: number // ← Aqui está o vínculo com o texto compartilhado
}