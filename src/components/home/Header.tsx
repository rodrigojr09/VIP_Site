import React, { useEffect, useState } from "react";
import HeaderButton from "@/components/buttons/HeaderButton";
import Capa from "../../../public/Capa.jpg"; // Importe sua imagem aqui
import Image from "next/image";

export default function Header() {
  const [imgN, setImgN] = useState<number>(1);
  const images = [
    "/images/public/img (1).jpg",
    "/images/public/img (2).jpg",
    "/images/public/img (3).jpg",
    "/images/public/img (4).jpg",
    "/images/public/img (5).jpg",
    "/images/public/img (6).jpg",
    "/images/public/img (7).jpg",
    "/images/public/img (8).jpg",
    "/images/public/img (9).jpg",
    "/images/public/img (10).jpg",
    "/images/public/img (11).jpg",
    "/images/public/img (12).jpg",
    "/images/public/img (13).jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImgN(Math.floor(Math.random() * images.length));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <header className="bg-white text-green-500 py-16 h-50vh shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center h-full px-4">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:mr-6">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            VIP Preventiva
          </h1>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
            Realizamos exames médicos ocupacionais e desenvolvemos laudos como o
            LTCAT, PPRA e PCMSO. Além disso, oferecemos cursos de treinamento
            voltados para a área de segurança do trabalho.
          </p>
          <ul className="flex space-x-4 mt-4">
            <li>
              <HeaderButton href="/#contato">Contato</HeaderButton>
            </li>
            <li>
              <HeaderButton href="/#serviços">Serviços</HeaderButton>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <Image src={images[imgN]} alt={`Image ${imgN}`} width={454} height={454} className={"mx-auto "}/>
        </div>
      </div>
    </header>
  );
}
