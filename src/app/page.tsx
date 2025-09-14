'use client';
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
	const { login } = useAuth()
	const [identificador, setidentificador] = useState('')
	const [senha, setSenha] = useState('')
	const [erro, setErro] = useState<string | null>(null)
	const [manterConectado, setManterConectado] = useState(false);

	async function submeter() {
		if (identificador && senha) {
			if (!login) {
				exibirErro("O login ainda não está disponível. Tente novamente mais tarde.");
				return;
			}
			let idLimpo = identificador.trim()
			if (!idLimpo.includes("@")) {
				// Se não for email, remove tudo que não for número
				idLimpo = idLimpo.replace(/\D/g, "")
			}
			try {
				console.log("Tentando login...");
				await login(idLimpo, senha, manterConectado);
				console.log("Login realizado com sucesso");
			} catch (error) {
				console.error("Erro ao fazer login:", error);
				exibirErro("Ocorreu um erro no login. Verifique suas credenciais.");
			}
		} else {
			exibirErro("Preencha todos os campos!");
		}
	}

	function exibirErro(msg: string, tempoEmSegundos: number = 5) {
		console.log("Erro definido:", msg); // Verifica se o erro foi atualizado
		setErro(msg);
		setTimeout(() => setErro(null), tempoEmSegundos * 1000);
	}

	const formatValue = (value: string) => {
		const onlyNumbers = value.replace(/\D/g, "");

		// Detecta CPF (somente números, tamanho até 11)
		if (/^\d{0,11}$/.test(onlyNumbers) && onlyNumbers.length > 5 && !value.includes("@")) {
			return onlyNumbers
				.replace(/(\d{3})(\d)/, "$1.$2")
				.replace(/(\d{3})(\d)/, "$1.$2")
				.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
		}

		// Detecta telefone (9 ou 11 dígitos)
		if (/^\d{0,11}$/.test(onlyNumbers) && onlyNumbers.length >= 8 && !value.includes("@")) {
			return onlyNumbers
				.replace(/^(\d{2})(\d)/, "($1) $2")
				.replace(/(\d{5})(\d)/, "$1-$2");
		}

		// Se conter @, trata como e-mail (sem máscara)
		return value;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value;
		const maskedValue = formatValue(rawValue);
		setidentificador(maskedValue);
	};

	return (
		<Template>
			<div className="text-black bg-turquesaEscuro min-h-[77vh] p-4 flex flex-col justify-center items-center gap-10">
				<div className="flex flex-col gap-4 p-4 border border-black rounded-lg w-full max-w-[300px] bg-turquesaClaro text-white" style={{ boxShadow: '0px 0px 2px 1px black' }}>
					<div className="flex flex-col gap-2 justify-center items-center relative w-[140px] h-[140px] mx-auto">
						<Image alt="Usuario" src={'/outros/user.png'} fill className="object-contain" />
					</div>
					{erro && (
						<p className="bg-red-500 text-white text-center p-2 rounded-lg">
							{erro}
						</p>
					)}
					<div className="flex flex-col gap-4 font-secundaria text-lg">
						<fieldset className="flex flex-col gap-1">
							<label
								htmlFor="identificador"
								className="font-bold"
								style={{ textShadow: "1px 1px 2px black" }}
							>
								Informe seu identificador:
							</label>
							<input
								type="text"
								id="identificador"
								value={identificador}
								onChange={handleChange}
								className="px-2 py-1 rounded-lg text-black bg-turquesaMediotext-white focus:font-semibold"
								style={{ boxShadow: "0 0 2px 1px black" }}
							/>
						</fieldset>
						<fieldset className="flex flex-col gap-1">
							<label htmlFor="senha" className="font-bold" style={{ textShadow: '1px 1px 2px black' }}>Informe sua senha:</label>
							<input type="password" id="senha" onChange={(e) => setSenha(e.target.value)} className="px-2 py-1 rounded-lg bg-turquesaMedio text-white focus:font-semibold" style={{ boxShadow: '0 0 2px 1px black' }} />
						</fieldset>
					</div>
					<fieldset className="flex items-center gap-2">
						<input type="checkbox" id="manterConectado" checked={manterConectado} onChange={(e) => setManterConectado(e.target.checked)} />
						<label htmlFor="manterConectado" className="font-bold" style={{ textShadow: '1px 1px 2px black' }}>Manter conectado</label>
					</fieldset>
					<button className="w-full text-white uppercase font-bold py-2 bg-salmao" style={{ boxShadow: '1px 1px 2px black' }} onClick={submeter}>Entrar</button>
				</div>
				<span className="text-white uppercase font-black text-center leading-5 font-secundaria">
					Plataforma de estudos em desenvolvimento, somente usuarios credenciados podem acessar. Conteudos sendo adicionados diariamente.
				</span>
			</div>
		</Template>
	)
}

// Atualização