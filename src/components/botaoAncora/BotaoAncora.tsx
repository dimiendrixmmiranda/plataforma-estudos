import Link from "next/link";

interface BotaoAncoraProps {
    link: string
    texto: string
}

export default function BotaoAncora({ link, texto }: BotaoAncoraProps) {
    return (
        <Link href={`${link}`} className="fixed bottom-2 right-2 bg-red-600 overflow-hidden rounded-lg">
            <p className="text-xl uppercase font-bold px-4 py-1 text-white">
                {texto}
            </p>
        </Link>
    )
}