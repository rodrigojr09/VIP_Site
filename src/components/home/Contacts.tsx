export default function Contacts(){
    return (
        <div id="contato" className="bg-green-500 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4">
                    Contato
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%]">
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
        </div>
    )
}