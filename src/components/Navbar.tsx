import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const routes = [
	{ title: "Início", href: "/" },
	{ title: "Serviços", href: "/servicos" },
	{
		title: "Cursos",
		subitems: [
			{ title: "GRO", href: "/cursos/gro" },
			{ title: "LTCAT", href: "/cursos/ltcat" },
			{ title: "eSocial", href: "/cursos/esocial" },
			{ title: "PCMSO", href: "/cursos/pcmso" },
			{ title: "NR17", href: "/cursos/nr17" },
		],
	},
	{ title: "Sobre", href: "/sobre" },
	{ title: "Contato", href: "/contato" },
	{ title: "Trabalhe Conosco", href: "/trabalhe-conosco" },
	{ title: "Área do Cliente", href: "/area-cliente" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="w-full min-w-screen p-4 bg-white text-black shadow-md flex items-center justify-between">
			{/* Logo */}
			<div className="mx-4 flex items-center">
				<Image
					src="/logo.jpg"
					width={50}
					height={50}
					alt="Logo"
					className="rounded-full"
				/>
			</div>

			{/* Menu Desktop */}
			<nav className="hidden md:flex space-x-6 w-full justify-center font-medium">
				{routes.map((rota, index) =>
					rota.href ? (
						<NavLink
							key={index}
							title={rota.title}
							href={rota.href}
						/>
					) : (
						<NavMenu
							key={index}
							title={rota.title}
							subitems={rota.subitems || []}
						/>
					)
				)}
			</nav>

			{/* Botão de Menu Mobile */}
			<button
				className="md:hidden"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				{menuOpen ? <X size={28} /> : <Menu size={28} />}
			</button>

			{/* Menu Mobile */}
			{menuOpen && (
				<div className="absolute top-16 left-0 w-full bg-gray-900 shadow-md flex flex-col items-center md:hidden p-4 z-50">
					{routes.map((rota, index) =>
						rota.href ? (
							<NavLink
								key={index}
								title={rota.title}
								href={rota.href}
							/>
						) : (
							<NavMenu
								key={index}
								title={rota.title}
								subitems={rota.subitems || []}
							/>
						)
					)}
				</div>
			)}
		</header>
	);
}

/* Componentes */
interface NavLinkProps {
	title: string;
	href: string;
}

function NavLink({ title, href }: NavLinkProps) {
	return (
		<a href={href} className="hover:text-green-400 transition-colors py-2">
			{title}
		</a>
	);
}

interface NavMenuProps {
	title: string;
	subitems: { title: string; href: string }[];
}

function NavMenu({ title, subitems }: NavMenuProps) {
	const [open, setOpen] = useState<boolean>(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setOpen(true);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setOpen(false);
		}, 300);
	};

	return (
		<div
			className="relative group"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<button className="hover:text-green-400 flex items-center transition-colors py-2">
				{title}{" "}
				<ChevronDown
					size={16}
					className={`duration-300 ${open ? "rotate-180" : ""}`}
				/>
			</button>

			{open && (
				<div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 transition-opacity duration-300 opacity-100">
					{subitems.map((subitem, index) => (
						<a
							key={index}
							href={subitem.href}
							className="block px-4 py-2 hover:text-green-400 transition-colors"
						>
							{subitem.title}
						</a>
					))}
				</div>
			)}
		</div>
	);
}
