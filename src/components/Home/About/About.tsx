import Image from "next/image";

const AboutSection = () => {
	return (
		<section id="about" className="bg-green-600 text-white py-16 px-6">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					Sobre Nós
				</h2>
				<p className="text-lg md:text-xl">
					Somos uma empresa especializada em{" "}
					<span className="font-bold">
						Engenharia de Segurança e Medicina do Trabalho
					</span>
					. Nosso compromisso é garantir a saúde e segurança dos
					trabalhadores, atendendo às normas vigentes e oferecendo
					soluções eficazes para empresas de diversos setores.
				</p>
				<p className="text-lg md:text-xl mt-4">
					A <span className="font-bold">VIP</span> é um diferencial
					que proporciona atendimento personalizado e acompanhamento
					detalhado, garantindo que sua empresa esteja sempre em
					conformidade com a legislação e promovendo um ambiente de
					trabalho mais seguro e eficiente.
				</p>
				<div className="mt-8 flex justify-center">
					<Image
						src="/VIP.jpg"
						width={500}
						height={300}
						alt="Sobre Nós"
						className="rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
