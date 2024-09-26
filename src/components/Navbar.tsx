import { FaSearch } from "react-icons/fa";

const rotas = [
	{
		title: "Início",
		href: "/",
	},
	{
		title: "Serviços",
		href: "/servicos",
	},
	{
		title: "Laudos",
		href: "/laudos",
	},
	{
		title: "Contato",
		href: "/contato",
	},
];

export default function Navbar() {
	return (
		<div className="w-full min-w-screen p-4 bg-white shadow-md flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<img
					src={"/Logo.webp"}
                    width={128}
                    height={62}
					alt="Logo"
				/>
			</div>

			{/* Links de navegação */}
			<div className="flex space-x-10 text-black font-semibold">
				{rotas.map((rota, index) => (
					<a
						key={index}
						href={rota.href}
						className="hover:text-green-500 transition-colors"
					>
						{rota.title}
					</a>
				))}
			</div>

			{/* Campo de pesquisa */}
			<div className="flex items-center relative">
				<input
					type="text"
					className="border-b-2 border-green-500 outline-none px-2 pr-8 placeholder:text-green-500 w-64"
					placeholder="Pesquisar"
				/>
				<span className="absolute right-3 text-green-500">
					<FaSearch />
				</span>
				{/* Dropdown de resultados (vazio por enquanto) */}
				<div className="w-full bg-white absolute top-12 shadow-lg rounded-lg z-50">
					{/* Resultados da pesquisa aparecerão aqui */}
				</div>
			</div>
		</div>
	);
}
