import Footer from "@/components/Footer";
import Contato from "@/components/Home/Contato";
import Header from "@/components/Home/Header";
import Maps from "@/components/Home/Maps";
import ReviewCard from "@/components/Home/ReviewCard";
import Services from "@/components/Home/Services/Services";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // State para armazenar a imagem selecionada
  const [selectedImage, setSelectedImage] = useState(null);

  // Função para mudar a imagem selecionada
  const handleImageClick = (imageName: any) => {
    setSelectedImage(selectedImage === imageName ? null : imageName);
  };

  return (
    <div className="max-w-full">
      <Navbar />
      <Header />
      <Services />

      <section className="bg-gray-300 mt-8 py-10">
        <h1 className="text-3xl text-green-400 text-center mt-2">Laudos</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 h-[200px] lg:grid-cols-4 w-3/4 mx-auto mt-6 px-2">
          {/* Imagem 1 */}
          <div
            className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-[90%] h-auto"
            style={{
              backgroundImage: "url(/laudos/PGR.jpg)",
            }}
            onClick={() => handleImageClick("PGR")}
          >
            <p
              className={
                "absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-xl font-bold " +
                (selectedImage === "PGR" && "opacity-50")
              }
            >
              PGR
            </p>
          </div>

          {/* Imagem 2 */}
          <div
            className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-[90%] h-auto"
            style={{
              backgroundImage: "url(/laudos/PCMSO.jpg)",
            }}
            onClick={() => handleImageClick("PCMSO")}
          >
            <p
              className={
                "absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-xl font-bold " +
                (selectedImage === "PCMSO" && "opacity-50")
              }
            >
              PCMSO
            </p>
          </div>

          {/* Imagem 3 */}
          <div
            className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-[90%] h-auto"
            style={{
              backgroundImage: "url(/laudos/LTCAT.jpg)",
            }}
            onClick={() => handleImageClick("LTCAT")}
          >
            <p
              className={
                "absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-xl font-bold " +
                (selectedImage === "LTCAT" && "opacity-50")
              }
            >
              LTCAT
            </p>
          </div>

          {/* Imagem 4 */}
          <div
            className="flex transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 justify-center relative bg-cover w-[90%] h-auto"
            style={{
              backgroundImage: "url(/laudos/LIP.jpg)",
            }}
            onClick={() => handleImageClick("LIP")}
          >
            <p
              className={
                "absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 text-xl font-bold " +
                (selectedImage === "LIP" && "opacity-50")
              }
            >
              LIP
            </p>
          </div>
        </div>

        {/* Mostrar a descrição ao lado da imagem selecionada */}
        {selectedImage && (
          <div className="flex mt-8 justify-center items-center">
            <div className="w-[40%]">
              {/* Imagem selecionada */}
              <div
                className={`w-full h-[350px] shadow-xl bg-cover bg-center`}
                style={{
                  backgroundImage: `url(/laudos/${selectedImage}.jpg)`,
                }}
						  ></div>
            </div>
            <div className="ml-8 w-[40%]">
              <h2 className="text-2xl font-bold">{selectedImage}</h2>
              <p className="mt-4 text-lg">
                {selectedImage === "PGR" && (
                  <span>
                    O PGR (Programa de Gerenciamento de Riscos) é um documento
                    obrigatório para empresas que identifica, avalia e controla
                    riscos ocupacionais no ambiente de trabalho. Ele faz parte
                    da NR 01 e substituiu o antigo PPRA (Programa de Prevenção
                    de Riscos Ambientais).
                  </span>
                )}
                {selectedImage === "PCMSO" && (
                  <span>
                    O PCMSO (Programa de Controle Médico de Saúde Ocupacional) é
                    um programa obrigatório, estabelecido pela NR 07, que tem
                    como objetivo prevenir, monitorar e controlar a saúde dos
                    trabalhadores
                  </span>
                )}
                {selectedImage === "LTCAT" && (
                  <span>
                    O LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)
                    é um documento técnico que avalia os agentes nocivos no
                    ambiente de trabalho para determinar se os trabalhadores têm
                    direito à aposentadoria especial.
                  </span>
                )}
                {selectedImage === "LIP" && (
                  <span>
                    {" "}
                    O LIP (Laudo de Insalubridade e Periculosidade) é um
                    documento técnico que avalia as condições de trabalho para
                    determinar se um colaborador tem direito aos adicionais de
                    insalubridade e/ou periculosidade, conforme as NR 15 e NR
                    16.
                  </span>
                )}
              </p>
            </div>
          </div>
        )}
      </section>

      <Contato />
      <Maps />
      <Footer />
    </div>
  );
}
