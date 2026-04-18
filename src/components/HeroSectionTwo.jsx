import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroimg from "../assets/hero2.webp";

const HeroSectionTwo = () => {
  return (
    <section className="w-full bg-[#d9d3cb] py-12 sm:py-16 lg:py-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[320px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={heroimg}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full text-center md:text-left">
            <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.6] text-black max-w-[520px] mx-auto md:mx-0">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. <br />
              Zo weet je precies wat werkt en wat niet. <br />
              Nooit meer content zonder strategie. <br />
              Nooit meer content zonder resultaat.
            </h1>

            {/* CTA */}
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="group flex items-center gap-3 border border-black rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white">
                Leer ons kennen
                <span className="flex items-center justify-center bg-black text-white p-1.5 rounded-md transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>

          {/* Floating Down Button */}
          <div className="hidden md:flex items-center justify-center">
            <button className="border border-black rounded-xl p-3 transition-all duration-300 hover:bg-black hover:text-white">
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
