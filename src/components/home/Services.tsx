export default function Services(){
    return (
        <div id="serviços" className="h-full my-8 p-6 w-full text-gray-800">
            <h1 className="font-bold text-green-500 text-center text-3xl md:text-4xl lg:text-5xl mb-4">
                Serviços
            </h1>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="font-bold text-2xl mb-4">Exames Médicos Ocupacionais</h2>
                    <p>Realizamos uma variedade de exames médicos ocupacionais conforme exigido por regulamentações trabalhistas.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="font-bold text-2xl mb-4">Desenvolvimento de Laudos</h2>
                    <p>Desenvolvemos laudos como o LTCAT, PPRA e PCMSO para garantir a segurança e saúde no ambiente de trabalho.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="font-bold text-2xl mb-4">Cursos de Treinamento</h2>
                    <p>Oferecemos cursos de treinamento voltados para a área de segurança do trabalho para capacitar os profissionais.</p>
                </div>
            </div>
        </div>
    )
}