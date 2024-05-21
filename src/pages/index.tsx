import Navbar from "@/components/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full min-w-screen text-black flex justify-center" style={{backgroundImage: "url(/Capa.jpg)"}}>
        <div className="bg-[#000000c6] w-full text-white h-[60vh] justify-center text-center flex flex-col space-y-3">
          <h1 className="text-2xl font-bold">Departamento Técnico</h1>
          <p>{'msg'}</p>
          <a href="https://wa.me/{'numero'}" className="text-green-500 text-center flex justify-center w-full space-x-2 items-center"><FaWhatsapp/> <p>{'numero'}</p></a>
        </div>
      </div>
    </>
  );
}
