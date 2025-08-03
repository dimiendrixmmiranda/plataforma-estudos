import { useEffect, useState } from "react";

export function useMateriasCompletas() {
    const [materiasCompletas, setMateriasCompletas] = useState<string[]>([]);

    useEffect(() => {
        const salvos = localStorage.getItem("materiasCompletas");
        if (salvos) {
            setMateriasCompletas(JSON.parse(salvos));
        }
    }, []);

    function toggleMateriaCompleta(id: string) {
        const atualizadas = materiasCompletas.includes(id)
            ? materiasCompletas.filter((item) => item !== id)
            : [...materiasCompletas, id];

        setMateriasCompletas(atualizadas);
        localStorage.setItem("materiasCompletas", JSON.stringify(atualizadas));
    }

    return {
        materiasCompletas,
        toggleMateriaCompleta,
    };
}
