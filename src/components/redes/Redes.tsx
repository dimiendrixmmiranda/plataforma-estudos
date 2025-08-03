'use client'

import Link from "next/link"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { IoIosMail } from "react-icons/io"
import { TbBrandWhatsappFilled } from "react-icons/tb"

interface RedesProps{
    estiloComponente: string
    estiloLista: string
    visibilidadeTexto: boolean
}

export default function Redes({estiloComponente, estiloLista, visibilidadeTexto}: RedesProps) {
    return (
        <div className={`flex flex-col gap-2 w-full my-4 ${estiloComponente}`}>
            <span className="uppercase font-semibold">Entre em contato:</span>
            <ul className={`${estiloLista}`}>
                <li className="mx-auto">
                    <Link href={'/'} className="flex items-center gap-1 sm:gap-2">
                        <IoIosMail className="text-xl sm:text-2xl" />
                        <span className={`${visibilidadeTexto ? 'block' : 'hidden'} text-base font-bold sm:text-xl`}>Email</span>
                    </Link>
                </li>
                <li className="mx-auto">
                    <Link href={'/'} className="flex items-center gap-1 sm:gap-2">
                        <BiLogoInstagramAlt className="text-xl sm:text-2xl" />
                        <span className={`${visibilidadeTexto ? 'block' : 'hidden'} text-base font-bold sm:text-xl`}>Instagram</span>
                    </Link>
                </li>
                <li className="mx-auto">
                    <Link href={'/'} className="flex items-center gap-1 sm:gap-2">
                        <TbBrandWhatsappFilled className="text-xl sm:text-2xl" />
                        <span className={`${visibilidadeTexto ? 'block' : 'hidden'} text-base font-bold sm:text-xl`}>Whatsapp</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}