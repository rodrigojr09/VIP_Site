export default function ContatoInput({
	type,
	placeholder,
	area,
	value,
	onChange,
}: {
	type: "email" | "text";
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	area?: boolean;
}) {
	if (!area)
		return (
			<input
				onChange={(e) => onChange(e.target.value)}
				value={value}
				type={type}
				placeholder={placeholder}
				className="bg-white rounded-xl p-2 focus:outline-green-100 focus:outline-2"
			/>
		);
	else
		return (
			<textarea
				onChange={(e) => onChange(e.target.value)}
				value={value}
				placeholder={placeholder}
				className="bg-white rounded-xl p-2 resize-none focus:outline-green-100 focus:outline-2"
			></textarea>
		);
}
