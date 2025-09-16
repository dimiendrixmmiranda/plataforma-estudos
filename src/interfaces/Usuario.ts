export interface Usuario {
    uid: string;
    email: string;
    nome: string;
    token: string;
    provedor: string;
    imagemURL: string;
    telefone: string;
    sexo: string;
    tipo?: string;
    cpf?: string;
}