import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="w-full min-w-screen p-2 text-black flex">
        <div>
            <img src={"/Capa.png"} alt="Capa da VIP" className="w-full h-full"/>
        </div>
        <div className="flex space-x-10 flex-auto justify-center items-center">
            <a>Inicio</a>
            <a>Inicio</a>
            <a>Inicio</a>
            <a>Inicio</a>
        </div>
        <div className="flex items-center">
            <input className="border-b outline-none px-2 mr-7 border-green-500 placeholder:text-green-500" placeholder="Pesquisar"/>
            <span className="absolute right-10 text-green-500">
                <FaSearch/>
            </span>
        </div>
    </div>
  );
}
