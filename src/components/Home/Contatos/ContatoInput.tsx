export default function ContatoInput({                   
	type,
	placeholder,
	value,
	onChange,
}: {
	type: "email" | "text";
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
}) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="bg-white border border-gray-800 rounded-full p-2"
		/>
	);
}
