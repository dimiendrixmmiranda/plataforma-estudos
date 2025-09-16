'use client'
import Redes from "@/components/redes/Redes";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponente";
import useAuth from "@/data/hook/useAuth";
import { QuestionarioFirebase } from "@/interfaces/QuestionarioFirebase";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useEffect, useState } from "react";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOut, IoSchoolSharp } from "react-icons/io5";

export default function Header() {
    const { usuario, logout } = useAuth()
    const [questionarios, setQuestionarios] = useState<QuestionarioFirebase[] | null>(null)

    useEffect(() => {
        if (!usuario) return

        async function fetchQuestionarios() {
            try {
                if (usuario) {
                    const snapshot = await getDocs(
                        collection(db, "usuarios", usuario.uid, "resultados")
                    )

                    const fetchedQuestionarios = snapshot.docs.map(
                        doc => ({ id: doc.id, ...doc.data() } as QuestionarioFirebase)
                    )
                    const questionariosOrdenados = fetchedQuestionarios.sort((a, b) => {
                        const dataA = a.data?.toDate ? a.data.toDate() : new Date(0)
                        const dataB = b.data?.toDate ? b.data.toDate() : new Date(0)
                        return dataB.getTime() - dataA.getTime()
                    })
                    setQuestionarios(questionariosOrdenados)
                }
            } catch (error) {
                console.error("Erro ao buscar questionários: ", error)
            }
        }
        fetchQuestionarios()
    }, [usuario])


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
                <div className="flex flex-col w-full h-full">
                    {
                        usuario ? (
                            <ul className="flex flex-col gap-4 mt-4 accordionEspecial">
                                <li>
                                    <Link href={'/pages/usuario'} className="flex items-center gap-2">
                                        <FaUserCircle className="text-2xl" />
                                        <p className="text-xl uppercase font-black">Bem vindo {usuario.nome.split(' ')[0]}</p>
                                    </Link>
                                </li>
                                <Accordion>
                                    <AccordionTab header={
                                        <div className="flex gap-2 w-full">
                                            <IoSchoolSharp className="text-2xl" />
                                            <p className="text-xl uppercase font-black">Simulados Feitos</p>
                                        </div>
                                    }
                                    >
                                        <ul className="flex flex-col w-full gap-2">
                                            {
                                                questionarios?.map((questionario, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <Link href={`/pages/simuladosFeitos/${questionario.id}`} className="p-2 bg-red-100 flex rounded-lg">
                                                                <p>{questionario.data.toDate().toLocaleDateString()} - {questionario.data.toDate().toLocaleTimeString()}</p>
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </AccordionTab>
                                </Accordion>
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
                    <Redes estiloComponente="mt-auto" estiloLista="grid grid-cols-3" visibilidadeTexto={false} />
                </div>
            </SidebarComponent>
        </header>
    )
}