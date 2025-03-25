import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import servicos from "@/data/servicos";

export default function Services() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(3);

	// Ajusta o número de itens visíveis com base no tamanho da tela
	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth < 640) {
				setItemsPerPage(1); // 1 item para telas pequenas
			} else if (window.innerWidth < 1024) {
				setItemsPerPage(1); // 2 itens para telas médias
			} else {
				setItemsPerPage(3); // 3 itens para telas grandes
			}
		};

		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);

		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	const totalPages = Math.ceil(servicos.length / itemsPerPage);

	// Funções para avançar ou retroceder no carrossel
	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % totalPages);
	};

	// Calcula os itens visíveis no momento
	const startIndex = currentIndex * itemsPerPage;
	const visibleItems = servicos.slice(startIndex, startIndex + itemsPerPage);

	return (
		<section
			id="servicos"
			className="pt-8 border-t-2 w-full flex flex-col items-center"
		>
			<h1 className="text-3xl text-green-vip text-center font-bold">
				Nossos Serviços
			</h1>
			<div className="relative w-full max-w-[80%] mt-8">
				{/* Botões de navegação */}
				<button
					onClick={prevSlide}
					className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg z-20"
				>
					{"<"}
				</button>
				<button
					onClick={nextSlide}
					className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg z-20"
				>
					{">"}
				</button>

				{/* Carrossel */}
				<div className="overflow-hidden">
					<div className="flex transition-transform duration-500 py-4 ease-in-out">
						{visibleItems.map((service, index) => (
							<div
								key={index}
								className={`flex-none px-4 ${
									itemsPerPage === 1
										? "w-full"
										: itemsPerPage === 2
										? "w-1/2"
										: "w-1/3"
								}`}
							>
								<ServiceCard service={service} />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Indicadores de página */}
			<div className="flex justify-center mt-4 space-x-2">
				{Array.from({ length: totalPages }).map((_, pageIndex) => (
					<div
						key={pageIndex}
						onClick={() => setCurrentIndex(pageIndex)}
						className={`w-3 h-3 rounded-full cursor-pointer ${
							pageIndex === currentIndex
								? "bg-green-vip"
								: "bg-gray-300"
						}`}
					/>
				))}
			</div>
		</section>
	);
}
