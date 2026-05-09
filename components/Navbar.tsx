"use client";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-5">
      <div className="w-full max-w-7xl flex items-center justify-between px-4 py-4 sm:px-8 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.10)]">
        <div className="flex min-w-0 items-center gap-5 lg:gap-8">
          <Link href="/" className="flex items-center gap-3 group transition-opacity hover:opacity-80">
            <Image 
              src="/branding/logo_only_letter.jpeg" 
              alt="Logo" 
              width={28} 
              height={28} 
              className="rounded-sm grayscale brightness-200"
            />
            <span className="font-semibold tracking-tighter text-base uppercase text-white/90">SHOPHEBEL</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-white/75 font-medium">
            <Link href="#" className="hover:text-white transition-all duration-300">Analyse</Link>
            <Link href="#" className="hover:text-white transition-all duration-300">Leistungen</Link>
            <Link href="#" className="hover:text-white transition-all duration-300">Plattform</Link>
            <Link href="#" className="hover:text-white transition-all duration-300">Preise</Link>
          </div>
        </div>

        <button className="hidden bg-blue-600/80 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-600/20 sm:inline-flex">
          Website analysieren
        </button>
      </div>
    </nav>
  );
};
