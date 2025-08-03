'use client'

interface IntroducaoMateriaProps {
    introducao: string[]
}

export default function IntroducaoMateria({ introducao }: IntroducaoMateriaProps) {
    return (
        <ul className="flex flex-col gap-2">
            {
                introducao.map((paragrafo, i) => {
                    return (
                        <li key={i}>
                            <p className="indent-8">{paragrafo}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}