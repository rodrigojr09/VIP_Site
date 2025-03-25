import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>
					VIP Engenharia de Segurança e Medicina do Trabalho
				</title>
				{/* Meta tags essenciais */}
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				{/* SEO */}
				<meta
					name="description"
					content="Empresa de Engenharia de Segurança e Medicina do Trabalho. Realizamos Exames Médicos Ocupacionais, desenvolvemos Laudos (PGR, PCMSO, LIP, LTCAT) e oferecemos treinamentos especializados na área de segurança do trabalho."
				/>
				<meta
					name="keywords"
					content="Segurança do Trabalho, Medicina do Trabalho, Exames Ocupacionais, Laudos PGR, PCMSO, LIP, LTCAT, Treinamento, Cursos de Segurança"
				/>
				<meta
					name="author"
					content="VIP Engenharia de Segurança e Medicina do Trabalho"
				/>

				{/* Open Graph (para compartilhamento no Facebook, LinkedIn, etc.) */}
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="VIP Engenharia de Segurança e Medicina do Trabalho"
				/>
				<meta
					property="og:description"
					content="Empresa especializada em Segurança e Medicina do Trabalho. Exames Ocupacionais, Laudos Técnicos (PGR, PCMSO, LIP, LTCAT) e Centro de Treinamento."
				/>
				<meta property="og:url" content="https://vipsst.com.br" />
				<meta
					property="og:image"
					content="https://vipsst.com.br/VIP.jpg"
				/>

				{/* Monetização Google AdSense */}
				<meta
					name="google-adsense-account"
					content="ca-pub-4991145838274789"
				/>

				{/* Twitter Card (para compartilhamento no Twitter) */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="VIP Engenharia de Segurança e Medicina do Trabalho"
				/>
				<meta
					name="twitter:description"
					content="Empresa especializada em Segurança e Medicina do Trabalho. Exames Ocupacionais, Laudos Técnicos (PGR, PCMSO, LIP, LTCAT) e Centro de Treinamento."
				/>
				<meta
					name="twitter:image"
					content="https://vipsst.com.br/VIP.jpg"
				/>

				{/* Favicon */}
				<link rel="icon" href="/logo.jpg" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
