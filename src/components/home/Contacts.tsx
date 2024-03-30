export default function Contacts(){
    return (
        <div id="contato" className="bg-green-500 text-white py-16 flex">
            <div className="px-20 flex flex-col">
                <h1 className="font-bold text-xl lg:text-3xl mb-4">
                    Contato
                </h1>
                <div className="w-[100%]">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-xl mb-2">Email</h2>
                        <p className="text-lg">preventiva@vipprev.com.br</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-xl mb-2">Telefone</h2>
                        <p className="text-lg">(19) 3665-7716</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-xl mb-2">Endereço</h2>
                        <p className="text-lg">Rua Francisco Gomes, 395, Mococa-SP Brazil</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl px-4 flex flex-col">
                <p className="text-lg mb-6">Treinamentos</p>
                <p className="text-lg mb-6">Laudos</p>
                <p className="text-lg mb-6">Fichas de EPI</p>
                <p className="text-lg mb-6">ASOs</p>
                <p className="text-lg mb-6">Permissão de Trabalho (PT)</p>
            </div>
        </div>
    )
}