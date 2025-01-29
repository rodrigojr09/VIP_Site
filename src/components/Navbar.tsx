import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const rotas = [
	{
		title: "Início",
		href: "/",
	},
	{
		title: "Serviços",
		href: "/#servicos",
	},
	{
		title: "Laudos",
		href: "/laudos",
	},
	{
		title: "Contato",
		href: "/#contato",
	},
];

export default function Navbar() {
	const [isOpen, setOpen] = useState<boolean>(false);
	return (
		<div className="w-full min-w-screen p-2 bg-white shadow-md flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<Image
					src="/logo.jpg"
					sizes="100vw"
					width={62}
					height={62}
					alt="Logo"
				/>
			</div>

			{/* Links de navegação */}
			<div className="hidden md:flex space-x-10 w-full justify-center text-black font-semibold">
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
			<button
				className={`text-2xl flex md:hidden ${
					isOpen ? "rotate-120" : "-rotate-120"
				}`}
				onClick={() => setOpen(!isOpen)}
			>
				<FaBars />
				{`${isOpen}`}
			</button>
		</div>
	);
}
