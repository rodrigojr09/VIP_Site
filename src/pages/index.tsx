import ReviewCard from "@/components/Home/ReviewCard";
import Services from "@/components/Home/Services/Services";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
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
		<div className="max-w-full">
			<Navbar />
			<header className="bg-header text-white flex justify-center items-center h-[80vh] w-full">
				<section className="h-[80vh] bg-black bg-opacity-70 px-8 flex justify-center text-start">
					<div className="h-full flex-1 flex flex-col justify-center">
						<h1 className="font-bold text-2xl my-4 text-green-500">
							Vip Preventiva Enganharia e Medicina do trabalho
						</h1>
						<p className="leading-relaxed text-1xl my-4 w-1/2">
							A VIP Preventiva é uma empresa especializada nos
							serviços de Medicina Ocupacional, Engenharia de
							Segurança e Higiene do Trabalho, atuando desde o ano
							de 2001 na cidade de Mococa-SP e região.
						</p>
					</div>
					<div className="h-full flex flex-col justify-center w-1/3">
						<ReviewCard
							avatar="https://lh3.googleusercontent.com/a-/ALV-UjVY0DR8W_VIgf4EO1AvqZQStv1BKya-QdlgX5ehMHiyY_XG-j3-TA=w40-h40-p-rp-mo-ba6-br100"
							comment="Bom trabalho na área de treinamento e medicina do trabalho."
							name="Renato Barbosa Melo"
							rating={4}
							timeAgo="5 anos atrás"
						/>
					</div>
				</section>
			</header>

			<Services servicos={servicoes} />

			<section className="bg-gray-300 mt-8 py-10 ">
				<h1 className="text-3xl text-green-400 text-center mt-2">
					Laudos
				</h1>
				<div className="grid grid-cols-2 md:grid-cols-4 h-[200px] lg:grid-cols-4 w-3/4 mx-auto mt-6 px-2">
					{/* Imagem 1 */}
					<div
						className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-[90%] h-auto"
						style={{
							backgroundImage: "url(/laudos/PGR.jpg)",
						}}
					>
						<p className="absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-xl font-bold">
							PGR
						</p>
					</div>

					{/* Imagem 2 */}
					<div
						className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-[90%] h-auto"
						style={{
							backgroundImage: "url(/laudos/PCMSO.jpg)",
						}}
					>
						<p className="absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-xl font-bold">
							PCMSO
						</p>
					</div>

					{/* Imagem 3 */}
					<div
						className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-[90%] h-auto"
						style={{
							backgroundImage: "url(/laudos/LTCAT.jpg)",
						}}
					>
						<p className="absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-xl font-bold">
							LTCAT
						</p>
					</div>

					{/* Imagem 4 */}
					<div
						className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-[90%] h-auto"
						style={{
							backgroundImage: "url(/laudos/LIP.jpg)",
						}}
					>
						<p className="absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-xl font-bold">
							LIP
						</p>
					</div>
				</div>
			</section>

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
					<form className="space-y-4 flex flex-col w-full mt-4 md:my-auto md:w-1/4 items-center">
						<input
							type="text"
							name="nome"
							placeholder="Nome"
							required
							onChange={handleChange}
							className="w-full p-3 border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
						<input
							type="text"
							name="assunto"
							placeholder="Assunto"
							required
							onChange={handleChange}
							className="w-full p-3 border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
						<textarea
							name="mensagem"
							placeholder="Mensagem"
							required
							onChange={handleChange}
							className="w-full p-3 border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
						></textarea>
						<a
							href={gerarMailto()}
							className="bg-green-500 text-white px-6 py-3 w-full rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-center"
						>
							Enviar Email
						</a>
					</form>
				</div>
			</section>

			<section
				className="bg-gray-300 mt-8 py-10 justify-center flex"
				id=""
			>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1856.507541664524!2d-47.00499061411462!3d-21.467924797464494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b7b8467a688949%3A0x5e8ab75e26ff24e!2sVIP%20Engenharia%20de%20Seguran%C3%A7a%20e%20Medicina%20do%20Trabalho!5e0!3m2!1spt-BR!2sbr!4v1742414176547!5m2!1spt-BR!2sbr"
					className="border-0 min-w-[600px] min-h-[500px] w-full h-full"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</section>

			<footer className="bg-gray-800 text-white text-center p-4">
				<p className="text-lg">
					Vip Engenharia de Segurança e Medicina do Trabalho
				</p>
				<p className="text-lg">
					Rua José Bonifácio, 122 - Centro, Santa Bárbara d{"'"}Oeste
					- SP, 13450-001
				</p>
			</footer>
		</div>
	);
}

const servicoes = [
	{
		title: "laudos e programas de saude e segurança do trabalhos",
		description:
			"Laudos e programas de saúde e segurança no trabalho avaliam riscos, promovem a saúde dos trabalhadores e asseguram o cumprimento das normas legais, prevenindo acidentes e doenças ocupacionais. ",
	},
	{
		title: "Analises Quantitativas e Qualitativas de riscos ocupacionais",
		description:
			"Realizamos análises de riscos ocupacionais, tanto quantitativas, como a medição de ruído, calor, vibração e iluminação, quanto qualitativas, que envolvem a identificação de agentes de risco e a avaliação de seu impacto na saúde. ",
	},
	{
		title: "treinamentos de saude e segurança no trabalho",
		description:
			"Treinamentos de saúde e segurança no trabalho capacitam os colaboradores para prevenir acidentes, reduzir riscos e agir corretamente em situações de emergência.",
	},
	{
		title: "Comunicado de acidente de trabalho",
		description:
			"O Comunicado de Acidente de Trabalho (CAT) é um documento oficial que registra acidentes ou doenças ocupacionais, garantindo os direitos do trabalhador e o cumprimento das obrigações legais.",
	},
	{
		title: "PPP",
		description:
			"O Perfil Profissiográfico Previdenciário (PPP) é um documento que registra a história laboral do trabalhador, detalhando atividades, riscos ocupacionais e medidas de proteção, essencial para aposentadoria especial e saúde ocupacional. ",
	},
	{
		title: "vistorias técnicas períodicas",
		description:
			"Vistorias técnicas períodicas inspecionam o ambiente de trabalho para identificar riscos, garantir a segurança, a conformidade com normas e prevenir acidentes.",
	},

	{
		title: "Gestão de eventos de sst no esocial",
		description:
			"A gestão de eventos de SST no eSocial envolve o envio de informações sobre saúde e segurança do trabalho ao sistema, garantindo conformidade legal e integridade dos dados dos trabalhadores. ",
	},

	{
		title: "SIPAT",
		description:
			"A SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho) é um evento realizado pelas empresas para promover a conscientização sobre segurança e saúde no trabalho, com palestras, dinâmicas e atividades educativas. ",
	},
	{
		title: "PALESTRAS (IST, ALCOOLISMO, TAGABISMO E DROGAS, ETC..)",
		description:
			"Palestras sobre IST, alcoolismo, tabagismo e drogas têm o objetivo de conscientizar os trabalhadores sobre os riscos à saúde e os impactos no ambiente de trabalho, promovendo hábitos saudáveis e prevenção de doenças e comportamentos de risco.",
	},
];

const contatos = [
	{
		nome: "Atendimento",
		contato: ["(19) 99131-1130", "atendimento@vipsst.com.br"],
	},
	{
		nome: "Comercial",
		contato: ["(19) 99317-1847", "comercial@vipsst.com.br"],
	},
];
