import contatos from "@/data/contatos";
import links from "@/data/links";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-6 lg:px-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Sobre a empresa */}
					<div>
						<h3 className="text-xl font-semibold mb-3">
							Sobre Nós
						</h3>
						<p className="text-gray-400 text-sm">
							A Vip Engenharia de Segurança e Medicina do Trabalho
							oferece serviços especializados para garantir
							ambientes de trabalho mais seguros e saudáveis.
						</p>
					</div>

					{/* Contato */}
					<div>
						<h3 className="text-xl font-semibold mb-3">Contato</h3>
						<p className="text-gray-400 text-sm">
							R. Cap. José Caetano de Figdo, 244 - Centro
						</p>
						<p className="text-gray-400 text-sm">
							Mococa - SP, 13733-330
						</p>
						<p className="text-gray-400 text-sm">
							Telefone: {contatos[0].contato[0]}
						</p>
						<p className="text-gray-400 text-sm">
							Email: {contatos[0].contato[1]}
						</p>
					</div>

					{/* Redes Sociais */}
					<div>
						<h3 className="text-xl font-semibold mb-3">Siga-nos</h3>
						<div className="flex space-x-4">
							<a
								href={links.facebook}
								className="text-blue-600 hover:text-blue-500 underline transition-colors cursor-pointer"
							>
								Facebook
							</a>
							<a
								href={links.instagram}
								className="text-pink-500 hover:text-pink-400 underline transition-colors cursor-pointer"
							>
								Instagram
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
					&copy; {new Date().getFullYear()} VIP SST. Todos os direitos
					reservados.
				</div>
			</div>
		</footer>
	);
}
