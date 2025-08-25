'use client'

import Redes from "@/components/redes/Redes"
import useAuth from "@/data/hook/useAuth"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const { usuario } = useAuth()
// flex gap-2 sm:justify-center
    return (
        <footer className={`
            ${usuario ? 'pb-[70px]': ''}
            min-h-[15vh] flex flex-col gap-2 justify-center items-center p-4 bg-[url('/footer/footer.webp')] bg-cover bg-center
        `}>
            <div className="hidden">
                <p className="text-center font-medium">Projeto desenvolvido pelo grupo <b>E.M.</b>, idealizado por <b>Dimi Endrix Martins Miranda</b></p>
            </div>
            <Redes estiloComponente="" estiloLista="flex gap-2 sm:justify-center" visibilidadeTexto={true}/>
            <p className="text-sm font-semibold text-center">© 2024-2025 - Todos os direitos reservados</p>
            <Link href={`${usuario ? '/pages/materias' : '/'}`} className="flex">
                <Image alt="Logo Estuda+" src={'/logo/logo_estuda_+.png'} width={60} height={60}></Image>
                <Image alt="Logo Estuda+" src={'/logo/texto_estuda_+.png'} width={220} height={10}></Image>
            </Link>
        </footer>
    )
}