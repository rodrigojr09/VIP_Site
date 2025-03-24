import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="pt-BR">
			<Head />
			<body>
				<Main />
				<NextScript />
				{/* Monetização Google AdSense */}
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4991145838274789"
					crossorigin="anonymous"
				></script>
			</body>
		</Html>
	);
}
