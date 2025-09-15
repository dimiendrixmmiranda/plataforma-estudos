import { Timestamp } from "firebase/firestore"
import Questao from "./Questao"

export interface QuestionarioFirebase {
    id: string
    resultado: Questao[]
    data: Timestamp
    tempo: number
    acertos: number
    erros: number
}