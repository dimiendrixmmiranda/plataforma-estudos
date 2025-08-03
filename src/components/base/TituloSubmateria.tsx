import { useMateriasCompletas } from "@/data/hook/useMateriasCompletas";
import { FaCheckSquare } from "react-icons/fa";

interface TituloSubmateriaProps {
    texto: string
    id: string
}

export default function TituloSubmateria({ texto, id }: TituloSubmateriaProps) {
    const {toggleMateriaCompleta } = useMateriasCompletas();

    return (
        <div className="grid grid-cols-[1fr_50px]">
            <h4 className="font-bold text-xl">{texto}</h4>
            <button
                onClick={() => toggleMateriaCompleta(id)}
                className="flex justify-center items-center w-full h-full text-2xl"
            >
                <FaCheckSquare />
            </button>
        </div>
    )
}