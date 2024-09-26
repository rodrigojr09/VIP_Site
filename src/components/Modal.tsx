import React, {
	ReactNode,
	useState,
	cloneElement,
	isValidElement,
	Component,
	ReactElement,
} from "react";

// Modal Component
export default function Modal({
	children,
}: {
	children: ReactElement | ReactElement[];
}) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	function getOpenButton(): ReactNode | null {
		if (!Array.isArray(children)) return null;
		return children
			.filter((a) => a.type.toString().startsWith("class ModalButton"))
			.map((child, i) => {
				return cloneElement(child, {
					openModal,
					key: i,
				});
			})[0];
	}

	function getModalBody(): ReactNode | null {
		if (!Array.isArray(children)) return null;
		return children
			.filter((a) => a.type.toString().startsWith("class ModalBody"))
			.map((child, i) => {
				return cloneElement(child, {
					closeModal
				});
			})[0];
	}

	return (
		<div className="relative">
			{getOpenButton()}

			{isOpen && getModalBody()}
		</div>
	);
}

// ModalButton Component
interface ModalButtonProps {
	children?: ReactNode;
	label?: string;
	openModal?: () => void;
}

class ModalButton extends Component<ModalButtonProps> {
	render() {
		const { openModal, label, children } = this.props;
		return (
			<button
				onClick={openModal}
				className="flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all text-white font-bold py-2 px-4 mx-auto rounded-md"
			>
				{label || children}
			</button>
		);
	}
}

interface ModalBodyProps {
	title: string;
	children: ReactNode;
	closeModal?: () => void;
}

class ModalBody extends Component<ModalBodyProps> {
	render() {
		const { title, children, closeModal } = this.props;
		return (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
				<div className="bg-white rounded-lg w-[90%] max-w-lg p-6 relative shadow-lg">
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
}
export { ModalButton, ModalBody };
