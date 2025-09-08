interface TituloMateriaProps {
    texto: string
}

export default function TituloMateria({ texto }: TituloMateriaProps) {
    return (
        <h2 className="text-2xl font-black uppercase text-center sm:text-start">
            {texto}
        </h2>
    )
}