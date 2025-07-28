'use client'

import { useSearchParams } from "next/navigation";
import Template from "@/components/template/Template";

export default function Page() {
    const searchParams = useSearchParams();

    const categoria = searchParams.get("categoria");
    const portugues = searchParams.get("portugues");
    const matematica = searchParams.get("matematica");
    const geral = searchParams.get("geral");
    const especifico = searchParams.get("especifico");
    const informatica = searchParams.get("informatica");

    console.log(categoria)
    
    return (
        <Template>
            <div>
                <p>Português: {portugues}</p>
                <p>Matemática: {matematica}</p>
                <p>Geral: {geral}</p>
                <p>Específico: {especifico}</p>
                <p>Informática: {informatica}</p>
            </div>
        </Template>
    );
}
