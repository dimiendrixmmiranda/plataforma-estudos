'use client';
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";

export default function Page() {
	const { login } = useAuth()
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [erro, setErro] = useState<string | null>(null)
	const [manterConectado, setManterConectado] = useState(false);

	async function submeter() {
		if (email && senha) {
			if (!login) {
				exibirErro("O login ainda não está disponível. Tente novamente mais tarde.");
				return;
			}
			try {
				console.log("Tentando login...");
				await login(email, senha, manterConectado);
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

	return (
		<Template>
			<div className="text-black bg-zinc-300 min-h-[77vh] p-4 flex flex-col justify-center items-center gap-10">
				<div className="flex flex-col gap-4 p-4 border border-black rounded-lg w-full max-w-[300px] bg-amarelo text-white" style={{ boxShadow: '1px 1px 2px 1px black' }}>
					<div className="flex flex-col gap-2 justify-center items-center">
						<IoPerson className="text-7xl" />
						<h2 className="uppercase font-black">Entre</h2>
					</div>
					{erro && (
						<p className="bg-red-500 text-white text-center p-2 rounded-lg">
							{erro}
						</p>
					)}
					<div>
						<fieldset className="flex flex-col gap-1">
							<label style={{ textShadow: '1px 1px 2px black' }} htmlFor="email">Informe seu email:</label>
							<input type="text" id="email" onChange={(e) => setEmail(e.target.value)} className="px-2 py-1 rounded-lg text-black" style={{ boxShadow: '0 0 2px 1px black' }} />
						</fieldset>
						<fieldset className="flex flex-col gap-1">
							<label style={{ textShadow: '1px 1px 2px black' }} htmlFor="senha">Informe sua senha:</label>
							<input type="password" id="senha" onChange={(e) => setSenha(e.target.value)} className="px-2 py-1 rounded-lg text-black" style={{ boxShadow: '0 0 2px 1px black' }} />
						</fieldset>
					</div>
					<fieldset className="flex items-center gap-2">
						<input type="checkbox" id="manterConectado" checked={manterConectado} onChange={(e) => setManterConectado(e.target.checked)} />
						<label htmlFor="manterConectado" className="text-black">Manter conectado</label>
					</fieldset>
					<button className="w-full text-white uppercase font-bold py-2 bg-magenta" style={{ textShadow: '1px 1px 2px black', boxShadow: '1px 1px 2px black' }} onClick={submeter}>Entrar</button>
				</div>
				<span className="text-black uppercase font-black text-center leading-5">
					Plataforma de estudos em desenvolvimento, somente usuarios credenciados podem acessar. Conteudos sendo adicionados diariamente.
				</span>
			</div>
		</Template>
	)
}