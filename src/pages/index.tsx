import About from "@/components/Home/About/About";
import Contato from "@/pages/contato";
import Header from "@/components/Home/Header";
import Laudos from "@/components/Home/Laudos/Laudos";
import Maps from "@/components/Home/Maps";
import Whatsapp from "@/components/Home/Whatsapp";

export default function Home() {
	return (
		<div className="max-w-full flex flex-col space-y-0">
			<Header />
			<About />
			{/* <Services /> */}
			<Laudos />
			<p className="h-2 w-full my-2"></p>
			<Contato />
			<Maps />
			<Whatsapp />
		</div>
	);
}
