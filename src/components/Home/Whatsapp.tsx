import contatos from "@/data/contatos";
import { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function Whatsapp() {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const boxRef = useRef<HTMLDivElement>(null);

	// Fecha a caixa de chat ao clicar fora dela
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				boxRef.current &&
				!boxRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		}

		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);

	// Envia a mensagem para o WhatsApp
	const sendMessage = () => {
		if (message.trim() === "") return;

		const phoneNumber = contatos[0].contato[0].replace(/[^\d]/g, "");
		const encodedMessage = encodeURIComponent(message);
		const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

		window.open(whatsappURL, "_blank");
		setMessage(""); // Limpa o campo de mensagem após enviar
		setOpen(false); // Fecha o chat
	};

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{/* Botão Flutuante do WhatsApp */}
			<button
				onClick={() => setOpen(!open)}
				className="bg-green-500 hover:bg-green-600 text-white font-bold p-4 text-4xl rounded-full shadow-lg transition-all"
				aria-label="Abrir WhatsApp"
			>
				<FaWhatsapp />
			</button>

			{/* Caixa de Chat */}
			{open && (
				<div
					ref={boxRef}
					className="fixed bottom-16 right-4 bg-white text-black p-4 rounded-lg shadow-xl w-72 animate-fade-in flex flex-col border border-gray-300"
				>
					{/* Cabeçalho do Chat */}
					<div className="flex justify-between items-center border-b pb-2 mb-2">
						<h2 className="text-lg font-bold">
							Atendimento via WhatsApp
						</h2>
						<button
							onClick={() => setOpen(false)}
							className="text-gray-500 hover:text-red-500 transition"
							aria-label="Fechar chat"
						>
							❌
						</button>
					</div>

					{/* Área de Mensagens */}
					<div className="flex flex-col gap-2 p-2 border rounded-md bg-gray-100 h-40 overflow-y-auto">
						<p className="text-sm text-gray-700 self-start bg-white p-2 rounded-md shadow">
							Olá! Como podemos ajudar?
						</p>
					</div>

					{/* Input de Mensagem */}
					<div className="flex items-center mt-2 border rounded-md bg-white shadow-md">
						<input
							type="text"
							className="flex-1 p-2 outline-none border-none text-sm"
							placeholder="Escreva sua dúvida..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							onKeyDown={(e) =>
								e.key === "Enter" && sendMessage()
							}
						/>
						<button
							onClick={sendMessage}
							className="bg-green-500 hover:bg-green-600 text-white h-full p-2 rounded-r-md"
							aria-label="Enviar mensagem"
						>
							<FaPaperPlane />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
