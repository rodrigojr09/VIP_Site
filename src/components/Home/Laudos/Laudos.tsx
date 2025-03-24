import { LaudoCardProps, LaudoType } from "@/types";
import { useState } from "react";

const laudos: LaudoType[] = [
	{
		id: "PGR",
		image: "/laudos/PGR.jpg",
		description:
			"O PGR (Programa de Gerenciamento de Riscos) é um documento obrigatório para empresas que identifica, avalia e controla riscos ocupacionais no ambiente de trabalho. Ele faz parte da NR 01 e substituiu o antigo PPRA (Programa de Prevenção de Riscos Ambientais).",
	},
	{
		id: "PCMSO",
		image: "/laudos/PCMSO.jpg",
		description:
			"O PCMSO (Programa de Controle Médico de Saúde Ocupacional) é um programa obrigatório, estabelecido pela NR 07, que tem como objetivo prevenir, monitorar e controlar a saúde dos trabalhadores.",
	},
	{
		id: "LTCAT",
		image: "/laudos/LTCAT.jpg",
		description:
			"O LTCAT (Laudo Técnico das Condições Ambientais do Trabalho) é um documento técnico que avalia os agentes nocivos no ambiente de trabalho para determinar se os trabalhadores têm direito à aposentadoria especial.",
	},
	{
		id: "LIP",
		image: "/laudos/LIP.jpg",
		description:
			"O LIP (Laudo de Insalubridade e Periculosidade) é um documento técnico que avalia as condições de trabalho para determinar se um colaborador tem direito aos adicionais de insalubridade e/ou periculosidade, conforme as NR 15 e NR 16.",
	},
];

function LaudoCard({ laudo, onClick, isSelected }: LaudoCardProps) {
	return (
		<div
			className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
			style={{
				backgroundImage: `url(${laudo.image})`,
				opacity: isSelected ? 0.5 : 1,
			}}
			onClick={() => onClick(laudo.id)}
		>
			<p className="absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-lg sm:text-xl md:text-2xl font-bold">
				{laudo.id}
			</p>
		</div>
	);
}

function LaudoDetails({ laudo }: { laudo?: LaudoType }) {
	if (!laudo) return null;

	return (
		<div className="flex flex-col md:flex-row mt-8 justify-center items-center px-4">
			<div className="w-full md:w-[40%]">
				<div
					className="w-full h-48 sm:h-56 md:h-72 lg:h-80 xl:h-96 shadow-xl bg-cover bg-center rounded-lg"
					style={{ backgroundImage: `url(${laudo.image})` }}
				></div>
			</div>
			<div className="mt-4 md:mt-0 md:ml-8 w-full md:w-[50%]">
				<h2 className="text-xl sm:text-2xl font-bold">{laudo.id}</h2>
				<p className="mt-2 sm:mt-4 text-base sm:text-lg">
					{laudo.description}
				</p>
			</div>
		</div>
	);
}

export default function Laudos() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const handleImageClick = (imageName: string) => {
		setSelectedImage(selectedImage === imageName ? null : imageName);
	};

	return (
		<section className="bg-gray-300 mt-8 py-10 px-4" id="laudos">
			<h1 className="text-2xl sm:text-3xl text-green-400 text-center mt-2">
				Laudos
			</h1>
			<p className="text-gray-700 text-center mt-2 w-full sm:w-4/5 mx-auto text-sm sm:text-base">
				Oferecemos a elaboração de laudos técnicos essenciais para a
				segurança e saúde do trabalho (SST), como LTCAT, LIP, PCMSO e
				PGR. Nossos serviços garantem a conformidade com as normas
				reguladoras, identificando riscos ocupacionais, prevenindo
				acidentes e assegurando a qualidade do ambiente de trabalho para
				colaboradores e empresas.
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full sm:w-4/5 mx-auto mt-6 px-2">
				{laudos.map((laudo) => (
					<LaudoCard
						key={laudo.id}
						laudo={laudo}
						onClick={handleImageClick}
						isSelected={selectedImage === laudo.id}
					/>
				))}
			</div>
			{selectedImage && (
				<LaudoDetails
					laudo={laudos.find((l) => l.id === selectedImage)}
				/>
			)}
		</section>
	);
}
