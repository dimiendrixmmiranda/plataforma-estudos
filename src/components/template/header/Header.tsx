'use client'
import SidebarComponent from "@/components/sidebarComponent/SidebarComponente";
import useAuth from "@/data/hook/useAuth";
import Image from "next/image";
import Link from "next/link";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOut, IoSchoolSharp } from "react-icons/io5";

export default function Header() {
    const { usuario, logout } = useAuth()

    return (
        // Se o usuario estiver logado ele vai apontar para /pages/materias caso contrario ele aponta para /
        <header className="p-4 grid grid-cols-[1fr_40px] bg-azul-escuro" id="topo">
            <Link href={`${usuario ? '/pages/materias' : '/'}`} className="flex">
                <Image alt="Logo Estuda+" src={'/logo/logo_estuda_+.png'} width={40} height={40}></Image>
                <Image alt="Logo Estuda+" src={'/logo/texto_estuda_+.png'} width={160} height={10}></Image>
            </Link>
            <SidebarComponent
                titulo={
                    <GiHamburgerMenu />
                }
                header={
                    <h2 className="uppercase font-bold text-3xl">Menu</h2>
                }
            >
                {
                    usuario ? (
                        <ul className="flex flex-col gap-4 mt-4">
                            <li>
                                <Link href={'/'} className="flex items-center gap-2">
                                    <FaUserCircle className="text-2xl" />
                                    <p className="text-xl uppercase font-black">Bem vindo Usuario</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className="flex items-center gap-2">
                                    <IoSchoolSharp className="text-2xl" />
                                    <p className="text-xl uppercase font-black">Provas Feitas</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/pages/simulado'} className="flex items-center gap-2">
                                    <BiSolidSpreadsheet className="text-2xl" />
                                    <p className="text-xl uppercase font-black">Realizar Simulado</p>
                                </Link>
                            </li>
                            <li>
                                <button className="flex items-center gap-2" onClick={logout}>
                                    <IoLogOut className="text-2xl" />
                                    <p className="text-xl uppercase font-black">Sair</p>
                                </button>
                            </li>
                        </ul>
                    ) : ''
                }
            </SidebarComponent>
        </header>
    )
}