import Link from "next/link";

interface AncoraLinkProps {
    link: string
    texto: string
}

export default function AncoraLink({ link, texto }: AncoraLinkProps) {
    return (
        <Link href={link} className="bg-laranja text-center font-bold text-xl py-1 uppercase text-white px-2" style={{textShadow: '1px 1px 2px black', boxShadow: '1px 1px 2px black'}}>{texto}</Link>
    )
} 