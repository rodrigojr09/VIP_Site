import ServiceCard from "@/components/Home/Services/ServiceCard";
import Services from "@/components/Home/Services/Services";
import Modal, { ModalBody, ModalButton } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { CgEnter } from "react-icons/cg";
import { RiWhatsappFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="max-w-full">
      <Navbar />
      <header className="bg-header text-white flex justify-center items-center max-w-full h-80vh w-[100vw]">
        <div className="flex-1"></div>
        <section className="min-h-[50vh] md:w-[40vw]  bg-black bg-opacity-70 rounded-lg p-8 mx-4 flex flex-col justify-center text-center">
          <h1 className="font-bold text-2xl mb-4">
            Vip Engenharia de Segurança e Medicina do Trabalho
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Empresa de Engenharia de Segurança e Medicina do Trabalho.
            Realizamos Exames Médicos Ocupacionais, desenvolvemos Laudos (PGR /
            PCMSO / LIP / LTCAT), Centro de Treinamento com Cursos voltados a
            área de segurança do trabalho.
          </p>
        </section>
      </header>
      <Services servicos={servicoes} />
      <section className=" bg-gray-300 mt-8 py-8 ">
        <h1 className="text-3xl text-green-400 mt-8 text-center">Contato</h1>

        <div className="flex space-x-5 w-1/2 mx-auto">
          <div className="flex-1">
            Atendimento: (19) 99131-1130
            <br />
            Comercial: (19) 99317-1847
          </div>
          <div className="flex flex-col space-y-3">
            <input type="Nome" placeholder="nome" className="bg-slate-800 rounded-full p-2" />
            <input type="Email" placeholder="Email" className="bg-slate-800 rounded-full p-2"/>
            <input type="Assunto" placeholder="Assunto" className="bg-slate-800 rounded-full p-2"/>
            <textarea name="Mensagem" id="" placeholder="Mensagem" className="bg-slate-800 rounded-t-2xl rounded-l-2xl p-2"></textarea>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p className="text-lg">
          Vip Engenharia de Segurança e Medicina do Trabalho
        </p>
        <p className="text-lg">
          Rua José Bonifácio, 122 - Centro, Santa Bárbara d'Oeste - SP,
          13450-001
        </p>
      </footer>
    </div>
  );
}

const servicoes = [
  {
    title: "laudos e programas de saude e segurança do trabalhos",
    description:
      "Laudos e programas de saúde e segurança no trabalho avaliam riscos, promovem a saúde dos trabalhadores e asseguram o cumprimento das normas legais, prevenindo acidentes e doenças ocupacionais. ",
  },
  {
    title: "Analises Quantitativas e Qualitativas de riscos ocupacionais",
    description:
      "Realizamos análises de riscos ocupacionais, tanto quantitativas, como a medição de ruído, calor, vibração e iluminação, quanto qualitativas, que envolvem a identificação de agentes de risco e a avaliação de seu impacto na saúde. ",
  },
  {
    title: "treinamentos de saude e segurança no trabalho",
    description:
      "Treinamentos de saúde e segurança no trabalho capacitam os colaboradores para prevenir acidentes, reduzir riscos e agir corretamente em situações de emergência.",
  },
  {
    title: "Comunicado de acidente de trabalho",
    description:
      "O Comunicado de Acidente de Trabalho (CAT) é um documento oficial que registra acidentes ou doenças ocupacionais, garantindo os direitos do trabalhador e o cumprimento das obrigações legais.",
  },
  {
    title: "PPP",
    description:
      "O Perfil Profissiográfico Previdenciário (PPP) é um documento que registra a história laboral do trabalhador, detalhando atividades, riscos ocupacionais e medidas de proteção, essencial para aposentadoria especial e saúde ocupacional. ",
  },
  {
    title: "vistorias técnicas períodicas",
    description:
      "Vistorias técnicas períodicas inspecionam o ambiente de trabalho para identificar riscos, garantir a segurança, a conformidade com normas e prevenir acidentes.",
  },

  {
    title: "Gestão de eventos de sst no esocial",
    description:
      "A gestão de eventos de SST no eSocial envolve o envio de informações sobre saúde e segurança do trabalho ao sistema, garantindo conformidade legal e integridade dos dados dos trabalhadores. ",
  },

  {
    title: "SIPAT",
    description:
      "A SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho) é um evento realizado pelas empresas para promover a conscientização sobre segurança e saúde no trabalho, com palestras, dinâmicas e atividades educativas. ",
  },
  {
    title: "PALESTRAS (IST, ALCOOLISMO, TAGABISMO E DROGAS, ETC..)",
    description:
      "Palestras sobre IST, alcoolismo, tabagismo e drogas têm o objetivo de conscientizar os trabalhadores sobre os riscos à saúde e os impactos no ambiente de trabalho, promovendo hábitos saudáveis e prevenção de doenças e comportamentos de risco.",
  },
];

const contato = [
  { nome: "Atendimento", contato: "(19) 99131-1130" },
  { nome: "Comercial", contato: "(19) 99317-1847" },
];
