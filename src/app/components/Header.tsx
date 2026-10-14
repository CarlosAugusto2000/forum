'use client'

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#121212] text-gray-300 border-b border-gray-800 font-sans">
    

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Jacquard+12&family=MedievalSharp&display=swap');
        
        .font-medieval {
          font-family: 'MedievalSharp', cursive;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
        <div className="text-left">
          <Link href="/" className="text-4xl md:text-5xl font-medieval text-white tracking-wider hover:text-gray-200 transition-colors">
            Fórum dos Bizinhos
          </Link>
        </div>

     
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <div className="flex items-center text-sm text-gray-400 bg-[#1a1a1a] px-3 py-1.5 rounded border border-gray-700">
            <span>Existing user?</span>
            <Link href="#signin" className="text-white font-medium ml-1.5 hover:underline">
              Sign In ▼
            </Link>
          </div>

          <Link
            href="#signup"
            className="bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-semibold px-4 py-1.5 rounded text-sm transition-colors shadow"
          >
            Sign Up
          </Link>

          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#1a1a1a] text-sm text-gray-200 px-3 py-1.5 rounded border border-gray-700 focus:outline-none focus:border-gray-500 w-48"
            />
          </div>
        </div>
      </div>

  
      <nav className="bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex items-center overflow-x-auto whitespace-nowrap py-2.5 gap-6 text-sm font-medium">
          <Link href="#forums" className="text-white hover:text-blue-400 transition-colors">
            Forums
          </Link>
          <Link href="#downloads" className="text-gray-300 hover:text-blue-400 transition-colors">
            Downloads ▾
          </Link>
          <Link href="#news" className="text-gray-300 hover:text-blue-400 transition-colors">
            News
          </Link>
          <Link href="#cacowards" className="text-gray-300 hover:text-blue-400 transition-colors">
            Pensando ▾
          </Link>
          <Link href="#25years" className="text-gray-300 hover:text-blue-400 transition-colors">
            Pensando...
          </Link>
          <Link href="#doomwiki" className="text-gray-300 hover:text-blue-400 transition-colors">
            Pensando...
          </Link>
          <Link href="#activity" className="text-gray-300 hover:text-blue-400 transition-colors">
            Atividade ▾
          </Link>
        </div>
      </nav>
    </header>
  )
}
