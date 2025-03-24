import contatos from "@/data/contatos";

export default function PrivacyPolicy() {
	return (
		<section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 text-gray-900">
			<div className="container mx-auto max-w-4xl">
				<h1 className="text-3xl font-bold text-center mb-6">
					Política de Privacidade
				</h1>
				<p className="text-lg mb-4">
					Bem-vindo à{" "}
					<strong>
						VIP Engenharia de Segurança e Medicina do Trabalho
					</strong>
					. A sua privacidade é muito importante para nós. Esta
					Política de Privacidade explica como coletamos, usamos,
					armazenamos e protegemos suas informações ao utilizar nosso
					site e serviços.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					1. Informações que Coletamos
				</h2>
				<p className="mt-2">
					Coletamos os seguintes tipos de informações:
				</p>
				<ul className="list-disc ml-6 mt-2">
					<li>
						<strong>Informações fornecidas por você:</strong> Nome,
						e-mail, telefone e outros dados inseridos em
						formulários.
					</li>
					<li>
						<strong>Informações automáticas:</strong> Endereço IP,
						tipo de navegador, páginas visitadas, tempo de
						permanência no site e cookies.
					</li>
					<li>
						<strong>Informações de terceiros:</strong> Podemos
						coletar dados de parceiros para análise e melhoria dos
						serviços.
					</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6">
					2. Como Usamos suas Informações
				</h2>
				<ul className="list-disc ml-6 mt-2">
					<li>Fornecer e aprimorar nossos serviços.</li>
					<li>Personalizar sua experiência no site.</li>
					<li>Enviar notificações, atualizações e comunicados.</li>
					<li>Cumprir obrigações legais e regulatórias.</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6">
					3. Cookies e Tecnologias de Rastreamento
				</h2>
				<p className="mt-2">
					Utilizamos cookies para melhorar a navegação no site e
					analisar estatísticas. Você pode gerenciar suas preferências
					de cookies nas configurações do seu navegador.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					4. Compartilhamento de Informações
				</h2>
				<p className="mt-2">
					Não vendemos suas informações. Podemos compartilhar seus
					dados com parceiros para fins operacionais ou se exigido por
					lei.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					5. Proteção de Dados
				</h2>
				<p className="mt-2">
					Adotamos medidas de segurança para proteger suas informações
					contra acessos não autorizados, alterações, divulgação ou
					destruição indevida.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					6. Seus Direitos
				</h2>
				<ul className="list-disc ml-6 mt-2">
					<li>
						Solicitar acesso, correção ou exclusão de seus dados.
					</li>
					<li>Revogar o consentimento para o uso de seus dados.</li>
					<li>Solicitar a portabilidade dos seus dados.</li>
				</ul>

				<h2 className="text-2xl font-semibold mt-6">
					7. Alterações na Política
				</h2>
				<p className="mt-2">
					Podemos atualizar esta Política periodicamente. Recomendamos
					que você revise esta página regularmente para se manter
					informado.
				</p>

				<h2 className="text-2xl font-semibold mt-6">8. Contato</h2>
				<p className="mt-2">
					Se tiver dúvidas sobre esta Política de Privacidade, entre
					em contato conosco pelo e-mail:
					<strong> {contatos[0].contato[1]}</strong>.
				</p>
			</div>
		</section>
	);
}
