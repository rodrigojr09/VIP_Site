export default function Services(){
    return (
        <div id="serviços" className="h-full my-8 p-6 w-full text-gray-800">
            <h1 className="font-bold text-green-500 text-center text-3xl md:text-4xl lg:text-5xl mb-4">
                Serviços
            </h1>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="font-bold text-2xl mb-4">Exames Médicos Ocupacionais</h2>
                    <p>Nossa empresa realiza uma gama completa de exames médicos ocupacionais, atendendo a todas as exigências e regulamentações trabalhistas. Garantimos a saúde e a segurança dos colaboradores por meio desses procedimentos essenciais.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="font-bold text-2xl mb-4">Desenvolvimento de Laudos</h2>
                    <p>Oferecemos serviços especializados no desenvolvimento de laudos fundamentais para a segurança e saúde ocupacional. Com foco no LTCAT, PPRA e PCMSO, nosso objetivo é assegurar um ambiente de trabalho seguro e saudável para todos os colaboradores.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="font-bold text-2xl mb-4">Cursos de Treinamento</h2>
                    <p>Proporcionamos cursos de treinamento especializados em segurança do trabalho, visando capacitar os profissionais e promover ambientes laborais mais seguros e saudáveis.</p>
                </div>
            </div>
        </div>
    )
}