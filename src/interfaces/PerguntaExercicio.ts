import Resposta from "./Resposta"

export default interface PerguntaExercicioInterface {
    enunciado: string
    imagem?:string
    frase?: string
    complemento?: string
    arrayDeRespostas: Resposta[]
    justificativa: string
    categoriaDaPergunta: string
}