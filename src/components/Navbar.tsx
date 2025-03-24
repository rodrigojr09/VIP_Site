import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter } from "next/router";

type Route = {
	title: string;
	href?: string;
	subitems?: { title: string; href: string }[];
};

const routes: Route[] = [
	{ title: "Início", href: "/" },
	{
		title: "Serviços",
		subitems: [{ title: "Laudos", href: "/#laudos" }],
	},
	{ title: "Sobre", href: "/#about" },
	{ title: "Contato", href: "/#contato" },
	{
		title: "Políticas",
		subitems: [
			{ title: "Política Privacidade", href: "/politicas/privacidade" },
			{ title: "Termos de Uso", href: "/politicas/termos" },
		],
	},
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouter();
	useEffect(() => {
		setMenuOpen(false);
	}, [router.asPath]);
	return (
		<header className="w-full p-4 bg-white text-black shadow-md flex items-center justify-between">
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
			<div
				className={`absolute top-16 left-0 w-full bg-gray-300 shadow-md flex flex-col items-center md:hidden p-4 z-50 transition-all duration-300 ${
					menuOpen
						? "max-h-screen opacity-100"
						: "max-h-0 opacity-0 overflow-hidden"
				}`}
			>
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
							mobile
						/>
					)
				)}
			</div>
		</header>
	);
}

/* Componentes */
type NavLinkProps = {
	title: string;
	href: string;
};

function NavLink({ title, href }: NavLinkProps) {
	return (
		<Link
			href={href}
			className="hover:text-green-400 transition-colors py-2"
			role="menuitem"
		>
			{title}
		</Link>
	);
}

type NavMenuProps = {
	title: string;
	subitems: { title: string; href: string }[];
	mobile?: boolean;
};

export function NavMenu({ title, subitems, mobile = false }: NavMenuProps) {
	const [open, setOpen] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const menuRef = useRef<HTMLDivElement | null>(null);
	const router = useRouter();
	useEffect(() => {
		setOpen(false);
	}, [router.asPath]);

	// Fecha o menu ao clicar fora dele (Desktop)
	useEffect(() => {
		if (!mobile) {
			const handleClickOutside = (event: MouseEvent) => {
				if (
					menuRef.current &&
					!menuRef.current.contains(event.target as Node)
				) {
					setOpen(false);
				}
			};
			document.addEventListener("mousedown", handleClickOutside);
			return () =>
				document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [mobile]);

	// Controle de Hover para Desktop
	const handleMouseEnter = () => {
		if (!mobile && window.innerWidth > 768) {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			setOpen(true);
		}
	};

	const handleMouseLeave = () => {
		if (!mobile && window.innerWidth > 768) {
			timeoutRef.current = setTimeout(() => setOpen(false), 300);
		}
	};

	// Alternar menu ao clicar (Mobile)
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div
			className="relative z-50 w-48 md:w-auto mx-auto"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			ref={menuRef}
		>
			<button
				className="hover:text-green-400 flex items-center w-48 md:w-auto justify-center md:justify-start transition-colors py-2"
				onClick={handleClick}
			>
				{title}
				<ChevronDown
					size={16}
					className={`ml-2 transition-transform ${
						open ? "rotate-180" : ""
					}`}
				/>
			</button>

			<div
				className={`overflow-hidden transition-all duration-300 ${
					open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				} ${
					mobile
						? "relative bg-white shadow-lg rounded-md w-48"
						: "absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48"
				}`}
			>
				{subitems.map((subitem, index) => (
					<Link
						key={index}
						href={subitem.href}
						className="block px-4 py-2 hover:text-green-400 transition-colors"
						role="menuitem"
						onClick={() => setOpen(false)} // Fecha o menu ao clicar no item
					>
						{subitem.title}
					</Link>
				))}
			</div>
		</div>
	);
}
