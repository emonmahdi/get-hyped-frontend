import React from "react";
import { Mail, Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#dcd6cf] relative overflow-hidden">
      {/* BACKGROUND SHAPE */}
      <div className="absolute bottom-0 left-0 w-full h-[65%] bg-[#cfc8bf] rounded-t-[120px] z-0"></div>

      {/* STICKER TEXT BACKGROUND */}
      <div className="absolute bottom-20 left-[-40px] rotate-[-10deg] text-[80px] font-extrabold text-black/10 z-0 select-none">
        GETHYPED
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 pt-28 pb-10 px-6">
        {/* TOP CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[48px] sm:text-[72px] lg:text-[92px] font-semibold leading-[1.05] tracking-tight">
            Let’s Get Hyped!
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {/* Mail */}
            <button className="flex items-center gap-2 border border-black/20 px-5 py-2.5 rounded-xl bg-white/70 backdrop-blur-md hover:bg-white transition">
              Mail ons direct
              <Mail size={16} />
            </button>

            {/* CTA */}
            <button className="flex items-center gap-2 bg-[#FF4D1A] text-white px-5 py-2.5 rounded-xl shadow-lg hover:scale-105 transition">
              Get Results
              <Flame size={16} />
            </button>
          </div>
        </div>

        {/* FLOATING BADGE */}
        <div className="absolute right-6 top-16 sm:right-16 sm:top-20 rotate-12">
          <div className="w-[95px] h-[95px] rounded-full bg-pink-300 flex items-center justify-center text-black text-sm font-bold shadow-md">
            GH
          </div>
        </div>

        {/* FOOTER CONTENT */}
        <div className="mt-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LEFT LOGO */}
          <div className="flex items-end">
            <h3 className="text-[54px] font-extrabold border-[5px] border-black px-5 py-2 leading-none">
              GETHYPED
            </h3>
          </div>

          {/* CENTER */}
          <div className="flex flex-col gap-8">
            {/* LINKS */}
            <div className="flex flex-wrap gap-3">
              {["Expertises", "Work", "About", "Contact"].map((item) => (
                <span
                  key={item}
                  className="bg-white/80 px-4 py-2 rounded-xl text-sm hover:bg-white transition cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* SOCIAL */}
            <div>
              <p className="text-sm mb-3">Follow us</p>
              <div className="flex gap-3">
                {["in", "t", "ig", "yt"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition"
                  >
                    <span className="text-xs font-bold">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-sm space-y-6">
            <div>
              <p className="font-semibold mb-1">Contact</p>
              <p>info@gethyped.nl</p>
              <p>+31 6 1533 7496</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Adres</p>
              <p>Beltrumse straat 6,</p>
              <p>7141 AL Groenlo</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="max-w-7xl mx-auto mt-14 flex flex-col sm:flex-row justify-between text-xs text-black/60 gap-4">
          <p>© 2025 Get Hyped</p>
          <p>© Design by Dylan</p>
          <p>Privacyvoorwaarden</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
