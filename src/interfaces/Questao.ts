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
}