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
		href: "/#services",
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
	const [isOpen, setOpen] = useState<boolean>(false);
	return (
		<div className="w-full min-w-screen p-4 bg-white shadow-md flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<Image src={"/Logo.webp"} width={120} height={60} className="w-44" alt="Logo" />
			</div>

			{/* Links de navegação */}
			<div className="hidden md:flex space-x-10 text-black font-semibold">
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
