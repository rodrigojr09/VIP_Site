import Image from "next/image";
import { useState } from "react";
import contatos from "@/data/contatos";

export default function Contato() {
    const [formData, setFormData] = useState({
            nome: "",
            assunto: "",
            mensagem: "",
        });
    
        const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const gerarMailto = () => {
            const { nome, assunto, mensagem } = formData;
    
            const corpo = encodeURIComponent(
                `Nome: ${nome}\nMensagem: ${mensagem}`
            );
    
            return `mailto:${"atendimento@vipsst.com.br"}?subject=${assunto}&body=${corpo}`;
        };
	return (
		<section className="bg-gray-300 mt-8 py-10" id="contato">
			<h1 className="text-3xl text-green-400 text-center">Contato</h1>
			<div className="flex flex-col md:flex-row w-full mx-auto mt-8 px-4">
				{/* Imagem ocupando 25% */}
				<div className="w-full md:w-1/2 flex justify-center">
					<Image
						alt="Atendimento"
						src="/contato.svg"
						width={500}
						quality={100}
						height={100}
						className="w-3/4 h-auto"
					/>
				</div>

				{/* Bloco de Contatos - 50% */}
				<div className=" w-full md:w-1/4  text-start my-auto space-y-6">
					{contatos.map((a, i) => (
						<div key={i} className="w-full items-center">
							<h1 className="text-2xl text-green-400 font-bold">
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

				{/* Formulário - 50% */}
				<form className="space-y-4 flex flex-col w-full mt-4 md:my-auto md:w-2/4 items-center">
					<input
						type="text"
						name="nome"
						placeholder="Nome"
						required
						onChange={handleChange}
						className="w-3/4 p-3 border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
					/>
					<input
						type="text"
						name="assunto"
						placeholder="Assunto"
						required
						onChange={handleChange}
						className="w-3/4 p-3 border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
					/>
					<textarea
						name="mensagem"
						placeholder="Mensagem"
						required
						onChange={handleChange}
						className="w-3/4 p-3 border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
					></textarea>
					<a
						href={gerarMailto()}
						className="bg-green-500 text-white px-6 py-3 w-3/4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
					>
						Enviar Email
					</a>
				</form>
			</div>
		</section>
	);
}
