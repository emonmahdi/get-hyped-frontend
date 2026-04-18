import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#d9d2c9] px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight border-2 border-black px-2 py-1">
          GETHYPED
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full shadow-sm">
          <a
            href="#"
            className="text-sm font-medium text-black hover:opacity-70"
          >
            Expertises
          </a>
          <a
            href="#"
            className="text-sm font-medium text-black hover:opacity-70"
          >
            Work
          </a>
          <a
            href="#"
            className="text-sm font-medium text-black hover:opacity-70"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium text-black hover:opacity-70"
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 bg-pink-300 hover:bg-pink-400 text-black px-5 py-2 rounded-full font-medium shadow-sm transition">
            Get Results
            <Flame size={16} className="text-orange-600" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col items-center gap-4 bg-white/60 backdrop-blur-md py-4 rounded-xl">
          <a href="#" className="text-sm font-medium">
            Expertises
          </a>
          <a href="#" className="text-sm font-medium">
            Work
          </a>
          <a href="#" className="text-sm font-medium">
            About
          </a>
          <a href="#" className="text-sm font-medium">
            Contact
          </a>

          <button className="flex items-center gap-2 bg-pink-300 px-5 py-2 rounded-full font-medium">
            Get Results
            <Flame size={16} className="text-orange-600" />
          </button>
        </div>
      )}
    </nav>
  );
}
