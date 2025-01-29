import { useState } from "react";
import ContatoInput from "./ContatoInput";

export default function ContatoForm() {
	const [nome, setNome] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [assunto, setAssunto] = useState<string>("");
	const [mensagem, setMensagem] = useState<string>("");

	return (
		<div className="w-1/2 flex flex-col space-y-3 bg-green-500 p-4 rounded-xl">
			<h1 className="text-white text-center text-xl font-bold mb-2">
				Envie um Email
			</h1>
			<ContatoInput
				type="text"
				placeholder="nome"
				value={nome}
				onChange={setNome}
			/>
			<ContatoInput
				type="email"
				placeholder="Email"
				value={email}
				onChange={setEmail}
			/>
			<ContatoInput
				type="text"
				placeholder="Assunto"
				value={assunto}
				onChange={setAssunto}
			/>
			<ContatoInput
				placeholder="Mensagem"
				onChange={setMensagem}
				value={mensagem}
				type="text"
				area
			/>
		</div>
	);
}
