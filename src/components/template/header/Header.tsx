import SidebarComponent from "@/components/sidebarComponent/SidebarComponente";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    return (
        // Se o usuario estiver logado ele vai apontar para /pages/materias caso contrario ele aponta para /
        <header className="p-4 grid grid-cols-[1fr_40px] bg-azul-escuro" id="topo">
            <Link href={'/'} className="flex">
                <Image alt="Logo Estuda+" src={'/logo/logo_estuda_+.png'} width={40} height={40}></Image>
                <Image alt="Logo Estuda+" src={'/logo/texto_estuda_+.png'} width={160} height={10}></Image>
            </Link>
            <SidebarComponent
                titulo={
                    <GiHamburgerMenu />
                }
                header={'Menu'}
            />
        </header>
    )
}