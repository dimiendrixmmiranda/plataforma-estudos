'use client'

import { Image } from 'primereact/image';

interface ImagemProps {
    enderecoDaImagem: string
}

export default function Imagem({ enderecoDaImagem }: ImagemProps) {
    return (
        <div className="mx-auto flex justify-center items-center w-[250px] sm:w-[500px] md:w-[700px]">
            <Image
                src={enderecoDaImagem}
                alt="Resumo"
                preview
                imageClassName="w-full"
            />
        </div>
    );
}
