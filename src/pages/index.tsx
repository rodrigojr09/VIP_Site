import Modal, { ModalBody, ModalButton } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { RiWhatsappFill } from "react-icons/ri";

export default function Home() {
	return (
		<>
			<Navbar />
			<header className="bg-header text-white flex justify-center items-center h-80vh">
				<div className="flex-1"></div>
				<section className="min-h-[50vh] w-[40vw] bg-black bg-opacity-70 rounded-lg p-8 mx-4 flex flex-col justify-center text-center">
					<h1 className="font-bold text-2xl mb-4">
						Vip Engenharia de Segurança e Medicina do Trabalho
					</h1>
					<p className="text-lg leading-relaxed mb-6">
						A VIP é especializada em Engenharia de Segurança e
						Medicina do Trabalho, oferecendo serviços completos de
						saúde ocupacional. Realizamos exames médicos
						ocupacionais, desenvolvemos laudos técnicos como LTCAT,
						PPRA e PCMSO, e contamos com um Centro de Treinamento
						especializado em cursos de segurança do trabalho,
						garantindo a proteção e o bem-estar de seus
						colaboradores.
					</p>

          <Modal>
            <div>ata</div>
            <ModalBody title="Nossos Contatos">
              <div>

              </div>
            </ModalBody>
						<ModalButton>
							<RiWhatsappFill className="text-2xl mr-2" />
							<span>Chame no WhatsApp</span>
						</ModalButton>
					</Modal>
				</section>
			</header>
		</>
	);
}

const departamentos = [
	{
		name: "Técnico",
		whatsapp: "seu-numero-aqui",
		description: "Suporte técnico em exames ocupacionais e laudos.",
	},
	{
		name: "Comercial",
		whatsapp: "seu-numero-aqui",
		description: "Informações sobre serviços e orçamentos.",
	},
	{
		name: "Treinamentos",
		whatsapp: "seu-numero-aqui",
		description: "Cursos e certificações em segurança do trabalho.",
	},
];
