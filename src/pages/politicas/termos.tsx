import contatos from "@/data/contatos";

export default function TermsOfUse() {
	return (
		<section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 text-gray-900">
			<div className="container mx-auto max-w-4xl">
				<h1 className="text-3xl font-bold text-center mb-6">
					Termos de Uso
				</h1>
				<p className="text-lg mb-4">
					Bem-vindo à{" "}
					<strong>
						VIP Engenharia de Segurança e Medicina do Trabalho
					</strong>
					. Estes Termos de Uso regulam o uso do nosso site e
					serviços. Ao acessar e utilizar nosso site, você concorda
					com os seguintes termos.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					1. Aceitação dos Termos
				</h2>
				<p className="mt-2">
					Ao acessar este site, você concorda em cumprir estes Termos
					de Uso e todas as leis e regulamentos aplicáveis.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					2. Uso Permitido
				</h2>
				<p className="mt-2">
					Você pode utilizar nosso site apenas para fins legais e de
					acordo com nossas diretrizes. É proibido:
				</p>
				<ul className="list-disc ml-6 mt-2">
					<li>Utilizar o site para atividades ilegais.</li>
					<li>Violar direitos de propriedade intelectual.</li>
					<li>Tentar hackear ou comprometer a segurança do site.</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6">
					3. Propriedade Intelectual
				</h2>
				<p className="mt-2">
					Todo o conteúdo do site, incluindo textos, imagens e
					logotipos, é propriedade da VIP Engenharia e não pode ser
					reproduzido sem permissão.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					4. Limitação de Responsabilidade
				</h2>
				<p className="mt-2">
					Nos esforçamos para manter as informações do site
					atualizadas, mas não garantimos sua precisão. Não nos
					responsabilizamos por danos decorrentes do uso das
					informações do site.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					5. Links para Terceiros
				</h2>
				<p className="mt-2">
					Nosso site pode conter links para sites de terceiros. Não
					nos responsabilizamos pelo conteúdo ou práticas desses
					sites.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					6. Modificações dos Termos
				</h2>
				<p className="mt-2">
					Reservamos o direito de modificar estes Termos de Uso a
					qualquer momento. O uso contínuo do site após as alterações
					significa que você aceita os novos termos.
				</p>

				<h2 className="text-2xl font-semibold mt-6">7. Contato</h2>
				<p className="mt-2">
					Se tiver dúvidas sobre estes Termos de Uso, entre em contato
					conosco pelo e-mail:
					<strong> {contatos[0].contato[1]}</strong>.
				</p>
			</div>
		</section>
	);
}
