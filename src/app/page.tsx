import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header />
      
  
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">
          Fóruns
        </h1>
        <p className="text-gray-400 text-sm">
          Em construção...
        </p>
      </div>
    </main>
  )
}
