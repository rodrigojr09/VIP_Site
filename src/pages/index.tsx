import Footer from "@/components/Footer";
import About from "@/components/Home/About/About";
import Contato from "@/components/Home/Contatos/Contato";
import Header from "@/components/Home/Header";
import Laudos from "@/components/Home/Laudos/Laudos";
import Maps from "@/components/Home/Maps";
import ReviewCard from "@/components/Home/ReviewCard";
import Services from "@/components/Home/Services/Services";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	return (
		<div className="max-w-full flex flex-col space-y-0">
			<Navbar />
			<Header />
			<About />
			{/* <Services /> */}
			<Laudos />
			<p className="h-2"></p>
			<Contato />
			<Maps />
			<Footer />
		</div>
	);
}
