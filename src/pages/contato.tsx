import Image from "next/image";
import { useState } from "react";
import contatos from "@/data/contatos";

export default function Contato() {
	const [formData, setFormData] = useState({
		nome: "",
		email: "",
		assunto: "",
		mensagem: "",
		aceitoTermos: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
	) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const gerarMailto = () => {
		const { nome, email, assunto, mensagem } = formData;
		const corpo = encodeURIComponent(
			`Nome: ${nome}\nEmail: ${email}\n\nMensagem: ${mensagem}`
		);
		return `mailto:atendimento@vipsst.com.br?subject=${assunto}&body=${corpo}`;
	};

	return (
		<section className="bg-gray-300 py-10 px-4" id="contato">
			<h1 className="text-3xl text-green-vip text-center">
				Fale Conosco
			</h1>
			<div className="flex flex-col md:flex-row w-full mx-auto mt-8">
				{/* Imagem - 30% */}
				<div className="w-full md:w-1/3 flex justify-center">
					<Image
						alt="Contato"
						src="/contato.svg"
						width={400}
						height={300}
						quality={100}
						className="w-3/4 h-auto"
					/>
				</div>

				{/* Bloco de Contatos - 30% */}
				<div className="w-full md:w-1/3 text-start my-auto space-y-6">
					{contatos.map((a, i) => (
						<div key={i} className="w-full">
							<h1 className="text-2xl text-green-vip font-bold">
								{a.nome}
							</h1>
							{a.contato.map((b, i2) => (
								<h1 key={i2} className="text-lg">
									{b}
								</h1>
							))}
						</div>
					))}
				</div>

				{/* Formulário - 40% */}
				<form className="space-y-4 flex flex-col w-full mt-4 md:my-auto md:w-1/3 items-center">
					<input
						type="text"
						name="nome"
						placeholder="Nome completo"
						required
						onChange={handleChange}
						className="w-3/4 p-3 border-2 border-green-vip rounded-md focus:ring-2 focus:ring-green-vip"
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						required
						onChange={handleChange}
						className="w-3/4 p-3 border-2 border-green-vip rounded-md focus:ring-2 focus:ring-green-vip"
					/>
					<input
						type="text"
						name="assunto"
						placeholder="Assunto"
						required
						onChange={handleChange}
						className="w-3/4 p-3 border-2 border-green-vip rounded-md focus:ring-2 focus:ring-green-vip"
					/>
					<textarea
						name="mensagem"
						placeholder="Mensagem"
						required
						onChange={handleChange}
						className="w-3/4 p-3 border-2 border-green-vip rounded-md focus:ring-2 focus:ring-green-vip"
					></textarea>

					{/* Checkbox de consentimento */}
					<label className="w-3/4 flex items-center space-x-2 text-sm text-gray-700">
						<input
							type="checkbox"
							name="aceitoTermos"
							checked={formData.aceitoTermos}
							onChange={handleChange}
							required
							className="accent-green-vip"
						/>
						<span>
							Declaro que li e aceito os{" "}
							<a
								href="/termos-de-uso"
								className="text-green-vip underline"
							>
								Termos de Uso
							</a>{" "}
							e a{" "}
							<a
								href="/politica-de-privacidade"
								className="text-green-vip underline"
							>
								Política de Privacidade
							</a>
							.
						</span>
					</label>

					<a
						href={gerarMailto()}
						className={`px-6 py-3 w-3/4 rounded-md text-center text-white ${
							formData.aceitoTermos
								? "bg-green-vip hover:bg-green-500"
								: "bg-gray-400 cursor-not-allowed"
						}`}
					>
						Enviar Email
					</a>
				</form>
			</div>
		</section>
	);
}
