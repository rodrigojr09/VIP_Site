export default function Card({ service }: any) {
	return (
		<div className="w-80 h-96 rounded-3xl bg-gradient-to-b from-gray-50 to-gray-100 hover:shadow-2xl hover:shadow-gray-500 hover:-translate-y-3 transition-all duration-300 ease-in-out flex flex-col overflow-hidden">
			{/* Seção Superior com Gradiente e Título */}
			<div className="h-36 flex items-center justify-center bg-gradient-to-r from-[#06622b] via-[#0fc658] to-[#06622b] relative">
				{/* Título */}
				<h2 className="text-xl font-extrabold px-4 text-white uppercase tracking-wider drop-shadow-lg z-10 text-center">
					{service.title}
				</h2>
			</div>

			{/* Conteúdo Central */}
			<div className="flex-1 px-6 py-6 text-center flex flex-col justify-center items-center gap-4">
				<p className="text-base text-gray-700 leading-relaxed">
					{service.description}
				</p>
			</div>

			{/* Categoria Inferior */}
			<div className="bg-gradient-to-r from-[#06622b] via-[#0fc658] to-[#06622b] text-white text-center py-3 font-semibold uppercase tracking-wide rounded-t-2xl shadow-inner hover:brightness-110 transition-all">
				{service.category}
			</div>
		</div>
	);
}
