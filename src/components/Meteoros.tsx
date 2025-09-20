import { Meteors } from "@/components/ui/meteors"

export default function Meteoros() {
    return (
        <div>
            <div className="relative min-h-screen w-[100vw] overflow-hidden rotate-45">
                <Meteors number={25} />
            </div>
            <h1 className="relative z-10 text-white">Conteúdo à frente</h1>
        </div>
    )
}
