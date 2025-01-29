import ServiceCard from "@/components/Home/Services/ServiceCard";
import ContatoForm from "@/components/Home/Contatos/ContatoForm";
import Services from "@/components/Home/Services/Services";
import Modal, { ModalBody, ModalButton } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { CgEnter } from "react-icons/cg";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";

export default function Home() {
	return (
		<div className="max-w-full  ">
			<Navbar />
			<header className="bg-header text-white flex justify-center items-center px-4 h-[80vh] w-full ">
				<div className="flex-1"></div>
				<section className="min-h-max w-max md:max-w-[40vw] bg-black bg-opacity-70 rounded-lg p-8 flex flex-col justify-center text-center">
					<h1 className="font-bold text-2xl mb-4">
						Vip Engenharia de Segurança e Medicina do Trabalho
					</h1>
					<p className="leading-relaxed mb-6 ">
						A VIP Engenharia é uma empresa especializada nos
						serviços de Medicina Ocupacional, Engenharia de
						Segurança e Higiene do Trabalho, atuando desde o ano de
						2001 na cidade de Mococa-SP e região.
						<br />
						<br />
						Nosso trabalho se embasa em conhecimentos teóricos e
						práticos adquiridos pela experiência de nossos
						profissionais —capacitados e nas legislações
						pertinentes, tendo como principal meta à realização de
						serviços com eficiência e competência, além de um
						atendimento personalizado, e o objetivo de trazer ao
						trabalhador segurança, saúde e qualidade de vida.
					</p>
				</section>
			</header>
			<Services servicos={servicoes} />
			<h1 className="text-3xl text-green-600 my-8 text-center">LAUDOS</h1>
			<section>
              <Image src="/laudos/PGR.jpg" width={1600} height={100}  className="min-w-full" alt="Descrição da imagem"/>
			  
			</section>
			<section className=" bg-gray-300 mt-8 py-8 " id="contato">
				<h1 className="text-3xl text-green-400 my-8 text-center">
					Contato
				</h1>

				<div className="flex space-x-5 w-1/2 mx-auto">
					<div className="w-1/2 text-center space-y-4">
						{contatos.map(
							(a: { nome: string; contato: string[] }, i) => (
								<div key={i}>
									<h1 className="text-xl text-green-400 font-bold">
										{a.nome}
									</h1>
									{a.contato.map((b: string, i2) => (
										<p key={i2}>{b}</p>
									))}
								</div>
							)
						)}
					</div>
					<ContatoForm />
				</div>
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
			"Laudos e programas de saúde e segurança no trabalho avaliam riscos, promovem a saúde dos trabalhadores e asseguram o cumprimento das normas legais, prevenindo acidentes e doenças ocupacionais. ",
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
		contato: ["(19) 99131-1130", "atendimento@vipprev.com.br"],
	},
	{
		nome: "Comercial",
		contato: ["(19) 99317-1847", "comercial@vipprev.com.br"],
	},
];

const laudos = [
	{
		title: "Programa de gerenciamento de riscos",
		description:
			"Laudos e programas de saúde e segurança no trabalho avaliam riscos, promovem a saúde dos trabalhadores e asseguram o cumprimento das normas legais, prevenindo acidentes e doenças ocupacionais.",
	},
	{
		title: "Análises quantitativas e qualitativas de riscos ocupacionais",
		description:"dddd"
	},
];
