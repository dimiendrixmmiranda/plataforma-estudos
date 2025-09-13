export interface Usuario {
    uid: string;
    email: string;
    nome: string;
    token: string;
    provedor: string;
    imagemURL: string;
    sexo?: string;
    tipo?: string;
    genero?: string;
    gender?: string;
    cpf?: string;
    telefone?: string;
}