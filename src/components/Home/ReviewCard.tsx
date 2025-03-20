import Image from "next/image";
import { Star, MoreVertical, Link2 } from "lucide-react";

interface ReviewProps {
	name: string;
	avatar: string;
	rating: number;
	timeAgo: string;
	comment: string;
}

export default function ReviewCard({
	name,
	avatar,
	rating,
	timeAgo,
	comment,
}: ReviewProps) {
	return (
		<div className="w-full max-w-md h-auto p-4 bg-white shadow-md rounded-lg border border-gray-200 flex flex-col">
			<div className="flex justify-between items-center">
				{/* Perfil */}
				<div className="flex items-center gap-3">
					<Image
						src={avatar}
						width={40}
						height={40}
						alt={name}
						className="rounded-full"
					/>
					<div>
						<p className="font-semibold text-gray-900">{name}</p>
						<span className="text-sm text-gray-500">{timeAgo}</span>
					</div>
				</div>
				{/* Menu de opções */}
				<Link2 className="text-gray-500 cursor-pointer" />
			</div>
			{/* Avaliação */}
			<div className="flex items-center mt-2 gap-1">
				{[...Array(5)].map((_, index) => (
					<Star
						key={index}
						
						size={16}
						className={
							index < rating ? "text-yellow-500" : "text-gray-300"
						}
					/>
				))}
			</div>
			{/* Comentário */}
			<p className="mt-2 text-gray-700 text-sm">{comment}</p>
		</div>
	);
}
