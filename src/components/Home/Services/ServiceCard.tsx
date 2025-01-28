export default function ServiceCard({
	service,
}: {
	service: { title: string; description: string; category?: string };
}) {
	return (
		<div className="w-[100%] h-[350px] rounded-3xl bg-gradient-to-b from-gray-50 to-gray-100 hover:shadow-2xl hover:shadow-gray-500 hover:-translate-y-3 transition-all duration-300 ease-in-out flex flex-col overflow-hidden">
			{/* Seção Superior com Gradiente e Título */}
			<div className="min-h-24 flex items-center justify-center bg-gradient-to-r from-[#06622b] via-[#0fc658] to-[#06622b] relative">
				{/* Título */}
				<h2 className="font-extrabold px-4 text-white uppercase tracking-wider drop-shadow-lg z-10 text-center">
					{service.title}
				</h2>
			</div>

			{/* Conteúdo Central */}
			<div className="flex-1 px-4 py-2 text-center flex flex-col justify-center items-center gap-4">
				<p className="text-gray-700 leading-relaxed">
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
