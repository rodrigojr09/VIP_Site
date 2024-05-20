import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full min-w-screen min-h-screen px-20 py-10 text-black flex justify-center" style={{backgroundImage: "url(/Capa.j)"}}>
        <div className="h-[50vh] bg-[#16a34a87] p-4 w-full">
          <h1 className="text-2xl font-bold text-white text-center">VIP </h1>
        </div>
      </div>
    </>
  );
}
