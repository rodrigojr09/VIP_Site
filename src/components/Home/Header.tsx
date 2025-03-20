import ReviewCard from "./ReviewCard";

export default function Header() {
	return (
		<header className="bg-header text-white flex justify-center items-center h-[80vh] w-full relative">
			{/* bg-header fica no styles.css com um background personalizado com uma imagem */}
			<div className="absolute inset-0 bg-black bg-opacity-60" />
			<section className="relative z-10 h-full w-full flex justify-between items-center px-12">
				{/* Informações da empresa */}
				<div className="w-1/2">
					<h1 className="font-bold text-3xl my-4 text-green-500 leading-tight">
						Vip Engenharia de Segurança e Medicina do Trabalho
					</h1>
					<p className="leading-relaxed text-lg my-4 text-gray-200">
						A VIP é uma empresa especializada nos serviços de
						Medicina Ocupacional, Engenharia de Segurança e Higiene
						do Trabalho, atuando desde o ano de 2001 na cidade de
						Mococa-SP e região.
					</p>
				</div>
				{/* Avaliação do cliente */}
				<div className="w-1/3 flex flex-col space-y-4 justify-end">
					<ReviewCard
						avatar="https://lh3.googleusercontent.com/a-/ALV-UjVY0DR8W_VIgf4EO1AvqZQStv1BKya-QdlgX5ehMHiyY_XG-j3-TA=w40-h40-p-rp-mo-ba6-br100"
						comment="Bom trabalho na área de treinamento e medicina do trabalho."
						name="Renato Barbosa Melo"
						rating={4}
						timeAgo="5 anos atrás"
					/>
					<ReviewCard
						avatar="/murilo.png"
						comment="Excelente trabalho! Profissionais qualificados e comprometidos com o trabalho."
						name="Murilo Ferreira"
						rating={5}
						timeAgo="1 semana atrás"
					/>
				</div>
			</section>
		</header>
	);
}
