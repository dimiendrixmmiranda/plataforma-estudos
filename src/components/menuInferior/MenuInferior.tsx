import Link from "next/link";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp, FaHome } from "react-icons/fa";

interface MenuInferiorProps{
    linkHome: string,
    linkVoltar: string,
    linkProximo: string
}

export default function MenuInferior({linkVoltar, linkHome, linkProximo}: MenuInferiorProps) {
    return (
        <nav className="w-full h-[45px] fixed bottom-0 left-0 bg-azul-escuro">
            <ul className="text-white grid grid-cols-4 w-full h-full">
                <li>
                    <Link href={linkHome} className="flex justify-center items-center w-full h-full text-2xl">
                        <FaHome />
                    </Link>
                </li>
                <li>
                    <Link href={'#topo'} className="flex justify-center items-center w-full h-full text-2xl">
                        <FaArrowAltCircleUp />
                    </Link>
                </li>
                <li>
                    <Link href={linkVoltar} className="flex justify-center items-center w-full h-full text-2xl">
                        <FaArrowAltCircleLeft />
                    </Link>
                </li>
                <li>
                    <Link href={linkProximo} className="flex justify-center items-center w-full h-full text-2xl">
                        <FaArrowAltCircleRight />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}