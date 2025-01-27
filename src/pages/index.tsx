import ServiceCard from "@/components/Home/Services/ServiceCard";
import Services from "@/components/Home/Services/Services";
import Modal, { ModalBody, ModalButton } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { RiWhatsappFill } from "react-icons/ri";

export default function Home() {
	return (
		<div className="max-w-full">
			<Navbar />
			<header className="bg-header text-white flex justify-center items-center max-w-full h-80vh">
				<div className="flex-1"></div>
				<section className="min-h-[50vh] w-[40vw] bg-black bg-opacity-70 rounded-lg p-8 mx-4 flex flex-col justify-center text-center">
					<h1 className="font-bold text-2xl mb-4">
						Vip Engenharia de Segurança e Medicina do Trabalho
					</h1>
					<p className="text-lg leading-relaxed mb-6">
						Empresa de Engenharia de Segurança e Medicina do
						Trabalho. Realizamos Exames Médicos Ocupacionais,
						desenvolvemos Laudos (PGR / PCMSO / LIP / LTCAT), Centro
						de Treinamento com Cursos voltados a área de segurança
						do trabalho.
					</p>

					<Modal>
						<ModalBody title="Nossos Contatos">
							<div className="flex flex-col items-start px-8">
								{departamentos.map((a) => (
									<p key={a.id} className="flex">
										<RiWhatsappFill className="text-green-500 text-2xl mr-2" />
										{a.name}
									</p>
								))}
							</div>
						</ModalBody>
						<ModalButton>
							<RiWhatsappFill className="text-2xl mr-2" />
							<span>Chame no WhatsApp</span>
						</ModalButton>
					</Modal>
				</section>
			</header>
			<Services servicos={servicoes} />
			<section className=" bg-gray-300 mt-8 pt-8">
				<h1 className="text-3xl text-green-400 mt-8 text-center">
					Contatos
				</h1>
				<div className="mt-8">
					<div></div>
				</div>
			</section>
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

const contato = [
	{ nome: "Atendimento", contato: "(19) 99131-1130" },
	{ nome: "Comercial", contato: "(19) 99317-1847" },
];

const departamentos = [
	{
		id: 1,
		name: "Técnico",
		whatsapp: "seu-numero-aqui",
		description: "",
	},
	{
		id: 2,
		name: "Comercial",
		whatsapp: "seu-numero-aqui",
		description: "",
	},
	{
		id: 3,
		name: "Treinamentos",
		whatsapp: "seu-numero-aqui",
		description: "",
	},
	{
		id: 4,
		name: "Médico",
		whatsapp: "seu-numero-aqui",
		description: "",
	},
];
