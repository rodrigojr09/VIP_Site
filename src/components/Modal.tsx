import React, { ReactNode, useState, cloneElement, ReactElement } from "react";

// Modal Component
export default function Modal({
	children,
}: {
	children: ReactElement | ReactElement[];
}) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const getChildByType = (type: string): ReactNode | null => {
		if (!Array.isArray(children)) return null;

		const matchedChild = children.find(
			(child) =>
				React.isValidElement(child) &&
				(child.type as any).displayName === type
		);

		return matchedChild
			? cloneElement(matchedChild as ReactElement, {
					openModal,
					closeModal,
			  })
			: null;
	};

	const openButton = getChildByType("ModalButton");
	const modalBody = getChildByType("ModalBody");

	return (
		<div className="relative">
			{openButton}
			{isOpen && modalBody}
		</div>
	);
}

// ModalButton Component
interface ModalButtonProps {
	children?: ReactNode;
	label?: string;
	openModal?: () => void;
}

function ModalButton({ children, label, openModal }: ModalButtonProps) {
	return (
		<button
			onClick={openModal}
			className="flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all text-white font-bold py-2 px-4 mx-auto rounded-md"
		>
			{label || children}
		</button>
	);
}
ModalButton.displayName = "ModalButton";

// ModalBody Component
interface ModalBodyProps {
	title: string;
	children: ReactNode;
	closeModal?: () => void;
}

function ModalBody({ title, children, closeModal }: ModalBodyProps) {
	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
			onClick={(e) => {
				if (e.target === e.currentTarget) closeModal && closeModal();
			}}
		>
			<div className="bg-white relative text-black rounded-lg w-[90%] max-w-lg p-6 shadow-lg">
				{/* Modal Content */}
				<h2 className="text-2xl font-bold mb-4">{title}</h2>
				{children}

				{/* Close Button */}
				<button
					onClick={closeModal}
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors text-xl"
				>
					&times;
				</button>

				{/* Additional Actions */}
				<div className="flex justify-end mt-6">
					<button
						onClick={closeModal}
						className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors mr-2"
					>
						Cancelar
					</button>
					<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
						Confirmar
					</button>
				</div>
			</div>
		</div>
	);
}
ModalBody.displayName = "ModalBody";

export { ModalButton, ModalBody };
