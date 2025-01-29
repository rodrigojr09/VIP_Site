import ContatoInput from "./ContatoInput";

export default function ContatoForm() {
	return (
		<div className="w-1/2 flex flex-col space-y-3 bg-green-500 p-4 rounded-xl">
			<ContatoInput type="text" placeholder="nome" />
			<ContatoInput type="email" placeholder="Email" />
			<ContatoInput type="text" placeholder="Assunto" />
			<textarea
				name="Mensagem"
				id=""
				placeholder="Mensagem"
				className="bg-slate-800 rounded-t-2xl rounded-l-2xl p-2"
			></textarea>
		</div>
	);
}
